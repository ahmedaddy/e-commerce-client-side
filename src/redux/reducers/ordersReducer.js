import {
  GET_ALL_ORDERS,
  GET_ONE_ORDER,
  UPDATE_TO_PAY,
  UPDATE_TO_DELIVERY,
} from "../type";

const initial = {
  orders: [],
  oneOrder: [],
  changePay: [],
  changeDelevery: [],
  loading: true,
};
const orderReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_ORDERS:
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };
    case GET_ONE_ORDER:
      return {
        loading: false,
        oneOrder: action.payload,
      };
    case UPDATE_TO_PAY:
      return {
        loading: false,
        changePay: action.payload,
      };
    case UPDATE_TO_DELIVERY:
      return {
        loading: false,
        changeDelevery: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
