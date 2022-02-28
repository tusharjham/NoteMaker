import axios from "axios";
import {
  CHANGE_STATUS,
  CLEAR_USER_AUTH,
  EDIT_PROFILE_FAIL,
  EDIT_PROFILE_START,
  EDIT_PROFILE_SUCCESS,
  LOGIN_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_START,
  SIGNUP_SUCCESS,
} from "./actionTypes";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(loginStart());
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/userLogin",
      { email, password },
      config
    );
    dispatch(loginSuccess(data));
  } catch (error) {
    const err = error.response.data;
    dispatch(loginFail(err));
  }
};

export function loginStart() {
  return { type: LOGIN_START };
}
export function loginSuccess(data) {
  return { type: LOGIN_SUCCESS, data };
}
export function loginFail(err) {
  return { type: LOGIN_FAIL, err };
}

export function signupStart() {
  return { type: SIGNUP_START };
}
export function signupSuccess(data) {
  return { type: SIGNUP_SUCCESS, data };
}
export function signupFail(err) {
  return { type: SIGNUP_FAIL, err };
}
export const signup =
  (name, email, password, confirmPassword) => async (dispatch) => {
    dispatch(signupStart());
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/userregister",
        { name, email, password },
        config
      );
      dispatch(signupSuccess(data));
    } catch (err) {
      dispatch(signupFail(err.response.data));
    }
  };

export const logout = () => async (dispatch) => {
  dispatch(logoutStart());
  try {
    await axios.post("/api/userLogout");
    dispatch(logoutSuccess());
  } catch (err) {
    dispatch(logoutFail(err.response.data));
  }
};
export function logoutStart() {
  return {
    type: LOGOUT_START,
  };
}
export function logoutFail(err) {
  return {
    type: LOGOUT_FAIL,
    err,
  };
}
export function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
  };
}

export const editProfile = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: EDIT_PROFILE_START,
    });
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const result = await axios.post(
      "/api/userUpdate",
      { name, email, password },
      config
    );
    dispatch(editProfileSuccess(result.data));
    dispatch(changeStatus());
  } catch (err) {
    dispatch(editProfileFailure("The email already exist"));
  }
};
function editProfileSuccess(data) {
  return {
    type: EDIT_PROFILE_SUCCESS,
    data,
  };
}
export function editProfileFailure(err) {
  return {
    type: EDIT_PROFILE_FAIL,
    err,
  };
}

export function changeStatus() {
  return {
    type: CHANGE_STATUS,
  };
}
export function changeUserAuth() {
  return {
    type: CLEAR_USER_AUTH,
  };
}
