import { CREATE_ORDER_CASH, CREATE_ORDER_CARD } from "../type";
import { useInsertData } from "../../hooks/useInsertData";
import { useGetData, useGetDataToken } from "../../hooks/useGetData";

export const createOrderCash = (id, body) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/orders/${id}`, body);
    dispatch({
      type: CREATE_ORDER_CASH,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: CREATE_ORDER_CASH,
      payload: e.response,
    });
  }
};
export const createOrderCard = (id, body) => async (dispatch) => {
  try {
    const response = await useGetDataToken(
      `/api/v1/orders/checkout-session/${id}`,
      body
    );
    dispatch({
      type: CREATE_ORDER_CARD,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: CREATE_ORDER_CARD,
      payload: e.response,
    });
  }
};
