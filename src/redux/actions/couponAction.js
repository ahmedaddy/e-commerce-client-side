import {
  GET_ALL_COUPONS,
  CREATE_COUPON,
  DELETE_COUPON,
  GET_ERROR,
  GET_ONE_COUPON,
  UPDATE_COUPON,
} from "../type";

import { useGetData, useGetDataToken } from "../../hooks/useGetData";
import {
  useInsertData,
  useInsertDataWithImage,
} from "../../hooks/useInsertData";
import useDeleteData from "../../hooks/useDeleteData";
import { useInsUpdateData } from "../../hooks/useUpdateData";

// Get all coupons
export const getAllCoupons = (limit) => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/coupon?limit=${limit}`);
    dispatch({
      type: GET_ALL_COUPONS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "error " + e,
    });
  }
};
// Get one coupon
export const getOneCoupon = (id) => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/coupon/${id}`);
    dispatch({
      type: GET_ONE_COUPON,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "error " + e,
    });
  }
};

// create coupon
export const createCoupon = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/coupon`, data);
    dispatch({
      type: CREATE_COUPON,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "error " + e,
    });
  }
};
// delete coupon
export const deleteCoupon = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/coupon/${id}`);
    dispatch({
      type: DELETE_COUPON,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "error " + e,
    });
  }
};
// update coupon
export const updateCoupon = (id, data) => async (dispatch) => {
  try {
    const response = await useInsUpdateData(`/api/v1/coupon/${id}`, data);
    dispatch({
      type: UPDATE_COUPON,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "error " + e,
    });
  }
};
