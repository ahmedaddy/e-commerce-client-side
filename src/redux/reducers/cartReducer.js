import {
  ADD_PRODUCT_TO_CART,
  GET_USER_CART,
  DELETE_USER_CART_ITEM,
  CLEAR_CART,
  APPLY_COUPON,
  UPDATE_ITEM_QUANTITY,
} from "../type";

const initial = {
  addToCart: [],
  userCart: [],
  deleteCartItem: [],
  clearCart: [],
  applyCoupon: [],
  updateQuantity: [],
  loading: true,
};
const authReducer = (state = initial, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        addToCart: action.payload,
      };
    case GET_USER_CART:
      return {
        ...state,
        userCart: action.payload,
      };
    case DELETE_USER_CART_ITEM:
      return {
        ...state,
        deleteCartItem: action.payload,
      };
    case CLEAR_CART:
      return {
        ...state,
        clearCart: action.payload,
      };
    case APPLY_COUPON:
      return {
        ...state,
        applyCoupon: action.payload,
      };
    case UPDATE_ITEM_QUANTITY:
      return {
        ...state,
        updateQuantity: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
