import { PRODUCTS } from "../../data/products";
import { SELECTED_PRODUCT, FILTERED_PRODUCT } from "../actions/product.action";

const initialState = {
  products: PRODUCTS,
  filteredProducts: [],
  selected: null,
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_PRODUCT:
      state.selected = state.products.find(
        (product) => product.id === action.productID
      );

      return state;

    case FILTERED_PRODUCT:
      return {
        ...state,
        filteredProducts: (state.filteredProducts = state.products.filter(
          (product) => product.category === action.categoryID
        )),
      };
    default:
      return state;
  }
};

export default ProductReducer;
