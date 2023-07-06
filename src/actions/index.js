export const SET_AGE_MODAL_CONFIRMED = 'SET_AGE_MODAL_CONFIRMED';
export const RESET_AGE_MODAL_CONFIRMED = 'RESET_AGE_MODAL_CONFIRMED';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';

export function addToCart(product, quantity, price) {
  const total = quantity * price;

  return {
    type: ADD_TO_CART,
    payload: {
      product,
      quantity,
      price,
      total,
    },
  };
}


export function removeFromCart(productId) {
  return {
    type: REMOVE_FROM_CART,
    payload: productId,
  };
}

export function setAgeModalConfirmed() {
  return {
    type: SET_AGE_MODAL_CONFIRMED
  };
}

export function resetAgeModalConfirmed() {
  return {
    type: RESET_AGE_MODAL_CONFIRMED
  };
}

export const updateSearchTerm = (searchTerm) => {
  return {
    type: UPDATE_SEARCH_TERM,
    payload: searchTerm,
  };
};

// Ação para armazenar os dados do usuário logado
export const setUser = (user) => {
  return {
    type: 'SET_USER',
    payload: user,
  };
};

// Ação para limpar os dados do usuário logado
export const clearUser = () => {
  return {
    type: 'CLEAR_USER',
  };
};
