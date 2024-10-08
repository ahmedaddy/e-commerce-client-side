import {
  GET_ALL_BRANDS,
  CREATE_BRAND,
  GET_ONE_BRAND,
  DELETE_BRAND,
  GET_ERROR,
} from "../type";

import { useGetData, useGetDataToken } from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";
import useDeleteData from "../../hooks/useDeleteData";

// Get all gategory
export const getAllBrands = (limit) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/brand?limit=${limit}`);
    dispatch({
      type: GET_ALL_BRANDS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "error " + e,
    });
  }
};

//get one category
export const getOneBrand = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/brand/${id}`);

    dispatch({
      type: GET_ONE_BRAND,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "error " + e,
    });
  }
};

// get all category with pagination
export const getAllBrandsPage = (page) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/brand?limit=8&page=${page}`);
    dispatch({
      type: GET_ALL_BRANDS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "error " + e,
    });
  }
};

// create brand
export const createBrand = (data) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImage(`/api/v1/brand`, data);
    dispatch({
      type: CREATE_BRAND,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "error " + e,
    });
  }
};
// delete brand
export const deleteBrand = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/brand/${id}`);
    dispatch({
      type: DELETE_BRAND,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "error " + e,
    });
  }
};
