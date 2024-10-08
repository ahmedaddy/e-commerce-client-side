import { GET_ALL_REVIEWS, CREATE_REVIEW, GET_ERROR } from "../type";

const initial = {
  allReviewProduct: [],
  createReview: [],

  loading: true,
};
const reviewReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_REVIEWS:
      return {
        ...state,
        loading: false,
        allReviewProduct: action.payload,
      };
    case CREATE_REVIEW:
      return {
        loading: false,
        createReview: action.payload,
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
