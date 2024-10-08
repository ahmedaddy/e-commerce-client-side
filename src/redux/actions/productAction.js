import {
  GET_ALL_PRODUCTS,
  CREATE_PRODUCT,
  GET_ONE_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  GET_ERROR,
  GET_ALL_PRODUCT_CATEGORY,
  GET_ALL_PRODUCT_BRAND,
  GET_ALL_PRODUCTS_SEARSH,
  GET_ALL_PRODUCTS_CONTAINER1,
  GET_ALL_PRODUCTS_CONTAINER2,
} from "../type";

import { useGetData, useGetDataToken } from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";
import useDeleteData from "../../hooks/useDeleteData";
import { useInUpdateDataWithImage } from "../../hooks/useUpdateData";

// Get all product
export const getAllProducts = (limit) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products?limit=${limit}`);
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "error " + e,
    });
  }
};
// Get all product container 1
export const getProductsContainer1 = (categoryId) => async (dispatch) => {
  try {
    const response = await useGetData(
      `/api/v1/products?limit=4&category[in][]=${categoryId}`
    );
    dispatch({
      type: GET_ALL_PRODUCTS_CONTAINER1,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "error " + e,
    });
  }
};
// Get all product container 2
export const getProductsContainer2 = (categoryId) => async (dispatch) => {
  try {
    const response = await useGetData(
      `/api/v1/products?limit=4&category[in][]=${categoryId}`
    );
    dispatch({
      type: GET_ALL_PRODUCTS_CONTAINER2,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "error " + e,
    });
  }
};

//get one product with id
export const getOneProduct = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products/${id}`);
    dispatch({
      type: GET_ONE_PRODUCT,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// get all product with pagination
export const getAllProductsPage = (page, limit) => async (dispatch) => {
  try {
    const response = await useGetData(
      `/api/v1/products?limit=${limit}&page=${page}`
    );
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "error " + e,
    });
  }
};

// create product
export const createProduct = (data) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImage(`/api/v1/products`, data);
    dispatch({
      type: CREATE_PRODUCT,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "error " + e,
    });
  }
};
// create product
export const updateProduct = (id, data) => async (dispatch) => {
  try {
    const response = await useInUpdateDataWithImage(
      `/api/v1/products/${id}`,
      data
    );
    dispatch({
      type: UPDATE_PRODUCT,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "error " + e,
    });
  }
};
// delete product
export const deleteProduct = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/products/${id}`);
    dispatch({
      type: DELETE_PRODUCT,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "error " + e,
    });
  }
};

//get all products with query string
export const getAllProductsSearch = (queryString) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products?${queryString}`);
    dispatch({
      type: GET_ALL_PRODUCTS_SEARSH,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

//get all products with query string
export const getAllProductsFav = (limit) => async (dispatch) => {
  try {
    const response = await useGetData(
      `/api/v1/products?limit=${limit}&sort=-ratingsAverage`
    );
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
//get all products in specific Category
export const getProductsInSpecificCategory =
  (limit, page, categoryId) => async (dispatch) => {
    try {
      const response = await useGetData(
        `/api/v1/products?limit=${limit}&page=${page}&category[in][]=${categoryId}`
      );
      dispatch({
        type: GET_ALL_PRODUCT_CATEGORY,
        payload: response,
        loading: true,
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };
export const getProductsInSpecificBrand =
  (limit, page, brandId) => async (dispatch) => {
    try {
      const response = await useGetData(
        `/api/v1/products?limit=${limit}&page=${page}&brand[in][]=${brandId}`
      );
      dispatch({
        type: GET_ALL_PRODUCT_BRAND,
        payload: response,
        loading: true,
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };
