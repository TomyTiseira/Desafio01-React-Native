import {
  ADD_PRODUCT,
  CONFIRM_CART,
  REMOVE_PRODUCT,
} from "../actions/cart.action";

const initialState = {
  cart: [],
  total: 0,
};

const priceProduct = (cart) =>
  cart.reduce((prev, act) => prev + act.quantity * act.price, 0);

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const indexInCart = state.cart.findIndex(
        (product) => product.id === action.product.id
      );

      if (indexInCart === -1) {
        const productToAdd = { ...action.product, quantity: action.quantity };
        const updateCart = [...state.cart, productToAdd];

        return { ...state, cart: updateCart, total: priceProduct(updateCart) };
      }

      const updateProductsInCart = state.cart.map((product) => {
        return product.id === action.product.id
          ? { ...product, quantity: product.quantity + action.quantity }
          : product;
      });
      return {
        ...state,
        cart: updateProductsInCart,
        total: priceProduct(updateProductsInCart),
      };

    case REMOVE_PRODUCT:
      const updateCart = [...state.cart].filter(
        (product) => product.id !== action.productID
      );

      return { ...state, cart: updateCart, total: priceProduct(updateCart) };

    case CONFIRM_CART:
      return { ...state, cart: [], total: 0 };
    default:
      return state;
  }
};

export default CartReducer;
