import {
  USER_LOGIN,
  USER_REGISTER,
  FORGET_PASSWORD,
  VERIFY_PASSWORD,
  RESET_PASSWORD,
  GET_LOGGED_USER_DATA,
  UPDATE_LOGGED_USER_DATA,
  UPDATE_LOGGED_USER_PASSWORD,
} from "../type";

import { useInsertData } from "../../hooks/useInsertData";
import { useInsUpdateData } from "../../hooks/useUpdateData";
import { useGetDataToken } from "../../hooks/useGetData";

// login action creator
export const login = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/auth/login`, data);
    dispatch({
      type: USER_LOGIN,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: USER_LOGIN,
      payload: e.response,
    });
  }
};

// signUp action creator
export const signUp = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/auth/signup`, data);
    dispatch({
      type: USER_REGISTER,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: USER_REGISTER,
      payload: e.response,
    });
  }
};

// Forget Password action
export const forgetPassword = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/auth/forgotPassword`, data);
    dispatch({
      type: FORGET_PASSWORD,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: FORGET_PASSWORD,
      payload: e.response,
    });
  }
};

// Verify Password action
export const verifyPassword = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/auth/verifyResetCode`, data);
    dispatch({
      type: VERIFY_PASSWORD,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: VERIFY_PASSWORD,
      payload: e.response,
    });
  }
};

// Verify Password action
export const resetPassword = (data) => async (dispatch) => {
  try {
    const response = await useInsUpdateData(`/api/v1/auth/resetPassword`, data);
    dispatch({
      type: RESET_PASSWORD,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: RESET_PASSWORD,
      payload: e.response,
    });
  }
};

// GEt looged user data
export const getLoggedUserData = () => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/users/getMe`);
    dispatch({
      type: GET_LOGGED_USER_DATA,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_LOGGED_USER_DATA,
      payload: e.response,
    });
  }
};

// GEt looged user data
export const updateUserData = (data) => async (dispatch) => {
  try {
    const response = await useInsUpdateData(`/api/v1/users/updateMe`, data);
    dispatch({
      type: UPDATE_LOGGED_USER_DATA,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_LOGGED_USER_DATA,
      payload: e.response,
    });
  }
};

// GEt looged user data
export const updateUserPassword = (data) => async (dispatch) => {
  try {
    const response = await useInsUpdateData(
      `/api/v1/users/changeMyPassword`,
      data
    );
    dispatch({
      type: UPDATE_LOGGED_USER_PASSWORD,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_LOGGED_USER_PASSWORD,
      payload: e.response,
    });
  }
};