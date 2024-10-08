import {
  ADD_PRODUCT_TO_CART,
  GET_USER_CART,
  DELETE_USER_CART_ITEM,
  CLEAR_CART,
  APPLY_COUPON,
  UPDATE_ITEM_QUANTITY,
} from "../type";

import { useInsertData } from "../../hooks/useInsertData";
import { useInsUpdateData } from "../../hooks/useUpdateData";
import { useGetDataToken } from "../../hooks/useGetData";
import useDeleteData from "../../hooks/useDeleteData";

// add product to cart
export const addProductToCart = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/cart`, data);
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: e.response,
    });
  }
};

// add product to cart
export const getUserCart = () => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/cart`);
    dispatch({
      type: GET_USER_CART,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_USER_CART,
      payload: e.response,
    });
  }
};

// add product to cart
export const deleteUserCartItem = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/cart/${id}`);
    dispatch({
      type: DELETE_USER_CART_ITEM,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: DELETE_USER_CART_ITEM,
      payload: e.response,
    });
  }
};

// add product to cart
export const deleteCartItems = () => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/cart/`);
    dispatch({
      type: CLEAR_CART,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: CLEAR_CART,
      payload: e.response,
    });
  }
};

// apply coupon
export const applyCoupon = (data) => async (dispatch) => {
  try {
    const response = await useInsUpdateData(`/api/v1/cart/applyCoupon`, data);
    dispatch({
      type: APPLY_COUPON,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: APPLY_COUPON,
      payload: e.response,
    });
  }
};

// apply coupon
export const updateItemQuantity = (id, data) => async (dispatch) => {
  try {
    const response = await useInsUpdateData(`/api/v1/cart/${id}`, data);
    dispatch({
      type: UPDATE_ITEM_QUANTITY,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_ITEM_QUANTITY,
      payload: e.response,
    });
  }
};
