import {
  GET_WISH_LIST,
  CREATE_WISH_LIST,
  DELETE_WISH_LIST,
  GET_ERROR,
} from "../type";

const initial = {
  allWishlist: [],
  createWishlist: [],
  deleteWishlist: [],

  loading: true,
};
const reviewReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_WISH_LIST:
      return {
        ...state,
        loading: false,
        allWishlist: action.payload,
      };
    case CREATE_WISH_LIST:
      return {
        loading: false,
        createWishlist: action.payload,
      };
    case DELETE_WISH_LIST:
      return {
        loading: false,
        deleteWishlist: action.payload,
      };
    case GET_ERROR:
      return {
        loading: true,
        allReviewProduct: action.payload,
      };

    default:
      return state;
  }
};

export default reviewReducer;
