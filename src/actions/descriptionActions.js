export const GET_PRODUCT = 'GET_PRODUCT';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const UPDATE_PRICE = 'UPDATE_PRICE';
export const SHARE_ON_SOCIAL_MEDIA = 'SHARE_ON_SOCIAL_MEDIA';

export function getProduct(productId) {
  return {
    type: GET_PRODUCT,
    payload: productId,
  };
}

export function updateQuantity(quantity) {
  return {
    type: UPDATE_QUANTITY,
    payload: quantity,
  };
}

export function updatePrice(price) {
  return {
    type: UPDATE_PRICE,
    payload: price,
  };
}

export function shareOnSocialMedia(platform) {
  return {
    type: SHARE_ON_SOCIAL_MEDIA,
    payload: platform,
  };
}
