import { GET_PRODUCT, UPDATE_QUANTITY, UPDATE_PRICE, SHARE_ON_SOCIAL_MEDIA } from '../actions/descriptionActions';

const initialState = {
  product: null,
  quantity: 1,
  price: 0.00,
  socialMedia: null,
};

const descriptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case UPDATE_QUANTITY:
      return {
        ...state,
        quantity: action.payload,
      };
    case UPDATE_PRICE:
      return {
        ...state,
        price: action.payload,
      };
    case SHARE_ON_SOCIAL_MEDIA:
      return {
        ...state,
        socialMedia: action.payload,
      };
    default:
      return state;
  }
};

export default descriptionReducer;
