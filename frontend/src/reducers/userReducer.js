import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
} from "../actions/actionTypes";

const initialUserState = {
  isLoggedIn: false,
  loading: false,
  userInfo: {},
  error: "",
};

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case LOGIN_START:
    case SIGNUP_START:
    case LOGOUT_START:
      return { ...state, loading: true, error: "" };
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        userInfo: action.data,
        loading: false,
        error: "",
      };
    case LOGIN_FAIL:
    case SIGNUP_FAIL:
      return { ...state, isLoggedIn: false, loading: false, error: action.err };
    case LOGOUT_SUCCESS:
      return {
        isLoggedIn: false,
        userInfo: {},
        loading: false,
        error: "",
      };
    case LOGOUT_FAIL:
      return { ...state, loading: false, error: action };
    default:
      return state;
  }
};
