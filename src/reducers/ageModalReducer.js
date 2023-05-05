import { SET_AGE_MODAL_CONFIRMED, RESET_AGE_MODAL_CONFIRMED } from "../actions";

const initialState = {
  ageModalConfirmed: false,
};

const ageModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AGE_MODAL_CONFIRMED:
      return { ...state, ageModalConfirmed: true };
    case RESET_AGE_MODAL_CONFIRMED:
      return { ...state, ageModalConfirmed: false };
    default:
      return state;
  }
};

export default ageModalReducer;
