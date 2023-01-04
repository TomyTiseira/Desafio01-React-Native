import { insertAddress, fetchAddress } from "../../db";

export const ADD_IMAGE = "ADD_IMAGE";
export const SELECT_IMAGE = "SELECT_IMAGE";
export const LOAD_IMAGES = "LOAD_IMAGES";

export const addImage = (title, image) => {
  return async (dispatch) => {
    try {
      await insertAddress(title, image);
    } catch (e) {
      console.log(e.message);
    }

    dispatch({
      type: ADD_IMAGE,
      payload: { title, image },
    });
  };
};

export const selectImage = (id) => ({
  type: SELECT_IMAGE,
  imageID: id,
});

export const loadImages = () => {
  return async (dispatch) => {
    try {
      const result = await fetchAddress();
      dispatch({
        type: LOAD_IMAGES,
        images: result.rows._array,
      });
    } catch (e) {
      console.log(e.message);
    }
  };
};
