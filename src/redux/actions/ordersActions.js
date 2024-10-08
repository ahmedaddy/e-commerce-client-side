import {
  GET_ALL_ORDERS,
  GET_ONE_ORDER,
  UPDATE_TO_PAY,
  UPDATE_TO_DELIVERY,
} from "../type";
import { useGetDataToken } from "../../hooks/useGetData";
import { useInsUpdateData } from "../../hooks/useUpdateData";

export const getAllOrders = (limit, page) => async (dispatch) => {
  try {
    const response = await useGetDataToken(
      `/api/v1/orders?limit=${limit}&page=${page}`
    );
    dispatch({
      type: GET_ALL_ORDERS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_ORDERS,
      payload: e.response,
    });
  }
};

export const getOneOrder = (id) => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/orders/${id}`);
    dispatch({
      type: GET_ONE_ORDER,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ONE_ORDER,
      payload: e.response,
    });
  }
};

export const changeOrderToPay = (id) => async (dispatch) => {
  try {
    const response = await useInsUpdateData(`/api/v1/orders/${id}/pay`);
    dispatch({
      type: UPDATE_TO_PAY,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_TO_PAY,
      payload: e.response,
    });
  }
};

export const changeOrderToDelivery = (id) => async (dispatch) => {
  try {
    const response = await useInsUpdateData(`/api/v1/orders/${id}/deliver`);
    dispatch({
      type: UPDATE_TO_DELIVERY,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_TO_DELIVERY,
      payload: e.response,
    });
  }
};
