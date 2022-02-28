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
  EDIT_PROFILE_START,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAIL,
  CHANGE_STATUS,
  CLEAR_AUTH,
  CLEAR_USER_AUTH,
} from "../actions/actionTypes";

const initialUserState = {
  isLoggedIn: false,
  loading: false,
  userInfo: {},
  error: "",
  success: false,
};

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case LOGIN_START:
    case SIGNUP_START:
    case LOGOUT_START:
    case EDIT_PROFILE_START:
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
        ...state,
        isLoggedIn: false,
        userInfo: {},
        loading: false,
        error: "",
      };
    case LOGOUT_FAIL:
      return { ...state, loading: false, error: action };
    case EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          name: action.data.name,
          email: action.data.email,
        },
        loading: false,
        error: "",
        success: true,
      };
    case EDIT_PROFILE_FAIL:
      return { ...state, loading: false, error: action.err };
    case CHANGE_STATUS:
      return { ...state, success: false };
    case CLEAR_USER_AUTH:
      return { ...state, loading: false, error: "" };
    default:
      return state;
  }
};
