import { URL_API } from "../../constants/database";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const CONFIRM_CART = "CONFIRM_CART";

export const productAdd = (product, quantity) => ({
  type: ADD_PRODUCT,
  product,
  quantity,
});

export const removeProduct = (id) => ({
  type: REMOVE_PRODUCT,
  productID: id,
});

export const confirmCart = (payload, total) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}ordenes.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: Date.now(),
          products: payload,
          total,
        }),
      });

      const result = await response.json();
      // console.log(result);

      dispatch({
        type: CONFIRM_CART,
        confirm: true,
      });
    } catch (e) {
      console.log(e.message);
    }
  };
};
