import {
  USER_LOGIN,
  USER_REGISTER,
  FORGET_PASSWORD,
  VERIFY_PASSWORD,
  GET_ERROR,
  RESET_PASSWORD,
  GET_LOGGED_USER_DATA,
  UPDATE_LOGGED_USER_DATA,
  UPDATE_LOGGED_USER_PASSWORD,
} from "../type";

const initial = {
  register: [],
  login: [],
  verifyPassword: [],
  resetCode: [],
  resetPassword: [],
  logggedUser: [],
  userChangedPassword: [],
  loading: true,
};
const authReducer = (state = initial, action) => {
  switch (action.type) {
    case USER_REGISTER:
      return {
        ...state,
        register: action.payload,
      };
    case USER_LOGIN:
      return {
        ...state,
        login: action.payload,
      };
    case FORGET_PASSWORD:
      return {
        ...state,
        forgetPassword: action.payload,
      };
    case VERIFY_PASSWORD:
      return {
        ...state,
        verifyPassword: action.payload,
      };
    case RESET_PASSWORD:
      return {
        ...state,
        resetPassword: action.payload,
      };
    case GET_LOGGED_USER_DATA:
      return {
        ...state,
        logggedUser: action.payload,
      };
    case UPDATE_LOGGED_USER_DATA:
      return {
        ...state,
        logggedUser: action.payload,
      };
    case UPDATE_LOGGED_USER_PASSWORD:
      return {
        ...state,
        userChangedPassword: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
