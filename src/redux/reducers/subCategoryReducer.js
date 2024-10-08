import { GET_SUB_CATEGORY, CREATE_SUB_CATEGORY, GET_ERROR } from "../type";

const initial = {
  subCategory: [],
  loading: true,
};
const brandReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_SUB_CATEGORY:
      return {
        ...state,
        loading: false,
        subCategory: action.payload,
      };
    case CREATE_SUB_CATEGORY:
      return {
        loading: false,
        subCategory: action.payload,
      };
    case GET_ERROR:
      return {
        loading: true,
        subCategory: action.payload,
      };

    default:
      return state;
  }
};

export default brandReducer;
