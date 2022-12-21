export const ADD_IMAGE = "ADD_IMAGE";
export const SELECT_IMAGE = "SELECT_IMAGE";

export const addImage = (title, image) => ({
  type: ADD_IMAGE,
  payload: { title, image },
});

export const selectImage = (id) => ({
  type: SELECT_IMAGE,
  imageID: id,
});
