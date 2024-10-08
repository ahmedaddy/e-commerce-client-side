import { GET_SUB_CATEGORY, CREATE_SUB_CATEGORY, GET_ERROR } from "../type";

import { useGetData, useGetDataToken } from "../../hooks/useGetData";
import {
  useInsertData,
  useInsertDataWithImage,
} from "../../hooks/useInsertData";

// Get all gategory
export const getSubCategoryOnCategory = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/categories/${id}/subCategories`);
    dispatch({
      type: GET_SUB_CATEGORY,
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
export const createSubCategory = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/subCategories`, data);
    dispatch({
      type: CREATE_SUB_CATEGORY,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "error " + e,
    });
  }
};
