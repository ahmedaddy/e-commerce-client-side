import {
  GET_ALL_COUPONS,
  CREATE_COUPON,
  DELETE_COUPON,
  GET_ONE_COUPON,
  GET_ERROR,
  UPDATE_COUPON,
} from "../type";

const initial = {
  coupon: [],
  createCoupon: [],
  deleteCoupon: [],
  oneCoupon: [],
  updateCoupon: [],
  loading: true,
};
const couponReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_COUPONS:
      return {
        ...state,
        loading: false,
        coupon: action.payload,
      };
    case CREATE_COUPON:
      return {
        loading: false,
        createCoupon: action.payload,
      };
    case DELETE_COUPON:
      return {
        loading: false,
        deleteCoupon: action.payload,
      };
    case GET_ONE_COUPON:
      return {
        loading: false,
        oneCoupon: action.payload,
      };

    case UPDATE_COUPON:
      return {
        loading: false,
        updateCoupon: action.payload,
      };

    case GET_ERROR:
      return {
        loading: true,
        coupon: action.payload,
      };

    default:
      return state;
  }
};

export default couponReducer;
