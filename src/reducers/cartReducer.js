import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions';

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
  return {
    ...state,
    items: [
      ...state.items,
      {
        product: action.payload.product,
        quantity: action.payload.quantity,
        price: action.payload.price,
        total: action.payload.total,
      },
    ],
  };

    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.product.id !== action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
