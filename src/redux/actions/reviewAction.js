import {
  GET_ALL_REVIEWS,
  CREATE_REVIEW,
  UPDATE_REVIEW,
  DELETE_REVIEW,
  GET_ERROR,
} from "../type";

import { useGetData, useGetDataToken } from "../../hooks/useGetData";
import { useInsertData } from "../../hooks/useInsertData";

//get rate category
export const getOneReviewOnSpecificProd =
  (id, page, limit) => async (dispatch) => {
    try {
      const response = await useGetData(
        `/api/v1/products/${id}/reviews?page=${page}&limit=${limit}`
      );

      dispatch({
        type: GET_ALL_REVIEWS,
        payload: response,
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "error " + e,
      });
    }
  };

//create rate
export const createReview = (body) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/review`, body);

    dispatch({
      type: CREATE_REVIEW,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: CREATE_REVIEW,
      payload: e.response,
    });
  }
};

//create rate
export const deleteReview = (body) => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/review`, body);

    dispatch({
      type: DELETE_REVIEW,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: DELETE_REVIEW,
      payload: e.response,
    });
  }
};

//create rate
export const updateReview = (prodID, body) => async (dispatch) => {
  try {
    const response = await useGetDataToken(
      `/api/v1/products/${prodID}/reviews`,
      body
    );

    dispatch({
      type: UPDATE_REVIEW,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_REVIEW,
      payload: e.response,
    });
  }
};
