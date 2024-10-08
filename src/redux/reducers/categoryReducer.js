import {
  GET_ALL_CATEGORY,
  CREATE_CATEGORY,
  GET_ONE_CATEGORY,
  GET_ERROR,
  DELETE_CATEGORY,
} from "../type";

const initial = {
  category: [],
  oneCategory: [],
  createCategory: [],
  loading: true,
};
const categoryReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORY:
      return {
        ...state,
        loading: false,
        category: action.payload,
      };
    case CREATE_CATEGORY:
      return {
        loading: false,
        createCategory: action.payload,
      };
    case GET_ONE_CATEGORY:
      return {
        loading: false,
        oneCategory: action.payload,
      };
    case GET_ERROR:
      return {
        loading: true,
        category: action.payload,
      };

    default:
      return state;
  }
};

export default categoryReducer;
