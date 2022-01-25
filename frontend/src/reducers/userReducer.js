import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from "../actions/actionTypes";

const initialUserState = {
  isLoggedIn: false,
  loading: false,
  userInfo: {},
  error: "",
};

export const userReducer = (state = initialUserState, action) => {
  console.log("USER reducer called");
  switch (action.type) {
    case LOGIN_START:
      return { ...state, loading: true, error: "" };
    case SIGNUP_START:
      return { ...state, loading: true, error: "" };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        userInfo: action.data,
        loading: false,
        error: "",
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        userInfo: action.data,
        loading: false,
        error: "",
      };
    case LOGIN_FAIL:
      return { ...state, isLoggedIn: false, loading: false, error: action.err };
    case SIGNUP_FAIL:
      return { ...state, isLoggedIn: false, loading: false, error: action.err };
    default:
      return state;
  }
};
