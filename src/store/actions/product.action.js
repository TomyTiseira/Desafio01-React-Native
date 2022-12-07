export const SELECTED_PRODUCT = "SELECTED_PRODUCT";
export const FILTERED_PRODUCT = "FILTERED_PRODUCT";

export const selectProduct = (id) => ({
  type: SELECTED_PRODUCT,
  productID: id,
});

export const filteredProduct = (id) => ({
  type: FILTERED_PRODUCT,
  categoryID: id,
});
