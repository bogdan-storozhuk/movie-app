import * as ActionTypes from "./actionTypes";

const initialState = {
  showModal: false,
  modalType: null,
};

const modalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.OPEN_ADD_MOVIE_MODAL:
    case ActionTypes.OPEN_EDIT_MOVIE_MODAL:
    case ActionTypes.OPEN_DELETE_MOVIE_MODAL:
      return {
        ...state,
        showModal: true,
        modalType: action.payload.modalType,
      };
    case ActionTypes.CLOSE_MOVIE_MODAL:
      return {
        ...state,
        showModal: false,
        modalType: null,
      };
    default:
      return state;
  }
};

export default modalsReducer;
