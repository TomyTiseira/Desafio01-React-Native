import { CATEGORIES } from "../../data/categories";
import { SELECTED_CATEGORY } from "../actions/category.action";

const initialState = {
  categories: CATEGORIES,
  selected: null,
};

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_CATEGORY:
      const indexCategory = state.categories.findIndex(
        (category) => category.id === action.categoryID
      );

      // Update the state when the index category isn't -1
      if (indexCategory !== -1) {
        initialState.selected = state.categories[indexCategory];
      }

      return state;

    default:
      return state;
  }
};

export default CategoryReducer;
