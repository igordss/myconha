export const SET_AGE_MODAL_CONFIRMED = 'SET_AGE_MODAL_CONFIRMED';
export const RESET_AGE_MODAL_CONFIRMED = 'RESET_AGE_MODAL_CONFIRMED';

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
