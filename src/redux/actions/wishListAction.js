import {
  GET_WISH_LIST,
  CREATE_WISH_LIST,
  DELETE_WISH_LIST,
  GET_ERROR,
} from "../type";

import { useGetDataToken } from "../../hooks/useGetData";
import { useInsertData } from "../../hooks/useInsertData";
import useDeleteData from "../../hooks/useDeleteData";

//get rate category
export const getWichList = () => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/wishlist`);

    dispatch({
      type: GET_WISH_LIST,
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
export const createWichList = (body) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/wishlist`, body);

    dispatch({
      type: CREATE_WISH_LIST,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: CREATE_WISH_LIST,
      payload: e.response,
    });
  }
};

//create rate
export const deleteWichList = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/wishlist/${id}`);

    dispatch({
      type: DELETE_WISH_LIST,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: DELETE_WISH_LIST,
      payload: e.response,
    });
  }
};
