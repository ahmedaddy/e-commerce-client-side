import {
  GET_ALL_BRANDS,
  CREATE_BRAND,
  GET_ONE_BRAND,
  GET_ERROR,
} from "../type";

const initial = {
  brand: [],
  oneBrand: [],
  loading: true,
};
const brandReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_BRANDS:
      return {
        ...state,
        loading: false,
        brand: action.payload,
      };
    case CREATE_BRAND:
      return {
        loading: false,
        createBrand: action.payload,
      };
    case GET_ONE_BRAND:
      return {
        loading: false,
        oneBrand: action.payload,
      };
    case GET_ERROR:
      return {
        loading: true,
        brand: action.payload,
      };

    default:
      return state;
  }
};

export default brandReducer;
