export const defaultShopManagerRoles = [
  "reaction:legacy:accounts/add:address-books",
  "reaction:legacy:accounts/add:emails",
  "reaction:legacy:accounts/create",
  "reaction:legacy:accounts/delete:emails",
  "reaction:legacy:accounts/invite:group",
  "reaction:legacy:accounts/read:admin-accounts",
  "reaction:legacy:accounts/read",
  "reaction:legacy:accounts/remove:address-books",
  "reaction:legacy:accounts/update:address-books",
  "reaction:legacy:accounts/update:currency",
  "reaction:legacy:accounts/update:emails",
  "reaction:legacy:accounts/update:language",
  "reaction:legacy:addressValidationRules/create",
  "reaction:legacy:addressValidationRules/delete",
  "reaction:legacy:addressValidationRules/read",
  "reaction:legacy:addressValidationRules/update",
  "reaction:legacy:carts:/update",
  "reaction:legacy:discounts/create",
  "reaction:legacy:discounts/delete",
  "reaction:legacy:discounts/read",
  "reaction:legacy:discounts/update",
  "reaction:legacy:email-templates/read",
  "reaction:legacy:email-templates/update",
  "reaction:legacy:emails/read",
  "reaction:legacy:emails/send",
  "reaction:legacy:fulfillment/read",
  "reaction:legacy:groups/create",
  "reaction:legacy:groups/delete",
  "reaction:legacy:groups/manage:accounts",
  "reaction:legacy:groups/read",
  "reaction:legacy:groups/update",
  "reaction:legacy:inventory/read",
  "reaction:legacy:inventory/update:settings",
  "reaction:legacy:inventory/update",
  "reaction:legacy:media/update",
  "reaction:legacy:mediaRecords/create:media",
  "reaction:legacy:mediaRecords/delete:media",
  "reaction:legacy:mediaRecords/update:media",
  "reaction:legacy:navigationTreeItems/create",
  "reaction:legacy:navigationTreeItems/delete",
  "reaction:legacy:navigationTreeItems/publish",
  "reaction:legacy:navigationTreeItems/read",
  "reaction:legacy:navigationTreeItems/update:settings",
  "reaction:legacy:navigationTreeItems/update",
  "reaction:legacy:navigationTrees/read:drafts",
  "reaction:legacy:navigationTrees/update",
  "reaction:legacy:orders/approve:payment",
  "reaction:legacy:orders/cancel:item",
  "reaction:legacy:orders/capture:payment",
  "reaction:legacy:orders/move:item",
  "reaction:legacy:orders/read",
  "reaction:legacy:orders/refund:payment",
  "reaction:legacy:orders/update",
  "reaction:legacy:products/archive",
  "reaction:legacy:products/clone",
  "reaction:legacy:products/create",
  "reaction:legacy:products/publish",
  "reaction:legacy:products/read",
  "reaction:legacy:products/update:prices",
  "reaction:legacy:products/update",
  "reaction:legacy:shipping-rates/update:settings",
  "reaction:legacy:fulfillmentTypes/update:settings",
  "reaction:legacy:fulfillmentTypes/create",
  "reaction:legacy:fulfillmentTypes/delete",
  "reaction:legacy:fulfillmentTypes/read",
  "reaction:legacy:fulfillmentTypes/update",
  "reaction:legacy:fulfillmentMethods/create",
  "reaction:legacy:fulfillmentMethods/delete",
  "reaction:legacy:fulfillmentMethods/read",
  "reaction:legacy:fulfillmentMethods/update",
  "reaction:legacy:fulfillmentRestrictions/create",
  "reaction:legacy:fulfillmentRestrictions/delete",
  "reaction:legacy:fulfillmentRestrictions/read",
  "reaction:legacy:fulfillmentRestrictions/update",
  "reaction:legacy:shippingMethods/create",
  "reaction:legacy:shippingMethods/delete",
  "reaction:legacy:shippingMethods/read",
  "reaction:legacy:shippingMethods/update",
  "reaction:legacy:shippingRestrictions/create",
  "reaction:legacy:shippingRestrictions/delete",
  "reaction:legacy:shippingRestrictions/read",
  "reaction:legacy:shippingRestrictions/update",
  "reaction:legacy:shops/read",
  "reaction:legacy:shops/update",
  "reaction:legacy:sitemaps/update:settings",
  "reaction:legacy:surcharges/create",
  "reaction:legacy:surcharges/delete",
  "reaction:legacy:surcharges/update",
  "reaction:legacy:tags/create",
  "reaction:legacy:tags/delete",
  "reaction:legacy:tags/read:invisible",
  "reaction:legacy:tags/read",
  "reaction:legacy:tags/update",
  "reaction:legacy:taxes/read",
  "reaction:legacy:taxes/update:settings",
  "reaction:legacy:taxRates/create",
  "reaction:legacy:taxRates/delete",
  "reaction:legacy:taxRates/read",
  "reaction:legacy:taxRates/update"
];

export const defaultShopOwnerRoles = [
  ...defaultShopManagerRoles,
  "reaction:legacy:shops/create"
];

export const defaultAccountsManagerRoles = [
  "reaction:legacy:accounts/add:address-books",
  "reaction:legacy:accounts/add:emails",
  "reaction:legacy:accounts/create",
  "reaction:legacy:accounts/delete:emails",
  "reaction:legacy:accounts/invite:group",
  "reaction:legacy:accounts/read:admin-accounts",
  "reaction:legacy:accounts/read",
  "reaction:legacy:accounts/remove:address-books",
  "reaction:legacy:accounts/update:address-books",
  "reaction:legacy:accounts/update:currency",
  "reaction:legacy:accounts/update:language"
];

export const defaultSystemManagerRoles = [
  ...defaultAccountsManagerRoles,
  // It's imperative that at least `create` and `update` group permissions
  // are listed here. Without these, nobody can create or update global
  // groups, which means nobody can give anybody any global permissions.
  "reaction:legacy:groups/create",
  "reaction:legacy:groups/delete",
  "reaction:legacy:groups/manage:accounts",
  "reaction:legacy:groups/read",
  "reaction:legacy:groups/update",
  "reaction:legacy:shops/create",
  "reaction:legacy:shops/read",
  "reaction:legacy:invitations/read"
];
