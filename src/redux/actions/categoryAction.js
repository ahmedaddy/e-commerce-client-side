import {
  GET_ALL_CATEGORY,
  CREATE_CATEGORY,
  GET_ONE_CATEGORY,
  GET_ERROR,
  DELETE_CATEGORY,
} from "../type";

import { useGetData, useGetDataToken } from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";
import useDeleteData from "../../hooks/useDeleteData";

// Get all gategory
export const getAllCategory = (limit) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/categories?limit=${limit}`);
    dispatch({
      type: GET_ALL_CATEGORY,
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
export const getOneCategory = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/categories/${id}`);

    dispatch({
      type: GET_ONE_CATEGORY,
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
export const getAllCategoryPage = (page) => async (dispatch) => {
  try {
    const response = await useGetData(
      `/api/v1/categories?limit=8&page=${page}`
    );
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "error " + e,
    });
  }
};

// create category
export const createCategory = (data) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImage(`/api/v1/categories`, data);
    dispatch({
      type: CREATE_CATEGORY,
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
export const deleteCategory = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/categories/${id}`);
    dispatch({
      type: DELETE_CATEGORY,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "error " + e,
    });
  }
};
