import SimpleSchema from "simpl-schema";
import Random from "@reactioncommerce/random";
import ReactionError from "@reactioncommerce/reaction-error";
import methodSchema from "../util/methodSchema.js";

const inputSchema = new SimpleSchema({
  method: methodSchema,
  shopId: String
});

/**
 * @method createFlatRateFulfillmentMethodMutation
 * @summary Creates a flat rate fulfillment method
 * @param {Object} context - an object containing the per-request state
 * @param {Object} input - Input (see SimpleSchema)
 * @returns {Promise<Object>} An object with a `method` property containing the created method
 */
export default async function createFlatRateFulfillmentMethodMutation(context, input) {
  const cleanedInput = inputSchema.clean(input); // add default values and such
  inputSchema.validate(cleanedInput);

  const { method: inputMethod, shopId } = cleanedInput;
  const { collections } = context;
  const { Fulfillment } = collections;
  const method = { ...inputMethod };

  // await context.validatePermissions("reaction:legacy:shippingMethods", "create", { shopId });
  await context.validatePermissions("reaction:legacy:fulfillmentMethods", "create", { shopId });

  const shippingRecord = await Fulfillment.findOne({ fulfillmentType: "shipping", shopId });
  if (!shippingRecord) throw new ReactionError("server-error", "Unable to create fulfillment method without defined type");

  method._id = Random.id();
  // MongoDB schema still uses `enabled` rather than `isEnabled`
  method.enabled = method.isEnabled;
  delete method.isEnabled;

  // Hardcoded field, each ff-method plugin has to introduce this field for grouping purpose
  // Schema defined as optional=true for backward compatibility
  method.fulfillmentMethod = "flatRate";

  const { matchedCount } = await Fulfillment.updateOne({
    shopId,
    fulfillmentType: "shipping"
  }, {
    $addToSet: {
      methods: method
    }
  });

  if (matchedCount === 0) throw new ReactionError("server-error", "Unable to create fulfillment method");

  return { method };
}