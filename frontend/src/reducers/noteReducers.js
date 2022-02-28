import {
  NOTES_FAIL,
  NOTES_REQUEST,
  NOTES_SUCCESS,
  NOTE_CREATE_REQUEST,
  NOTE_CREATE_REQUEST_FAIL,
  NOTE_CREATE_REQUEST_SUCCESS,
  NOTE_DELETE_FAILURE,
  NOTE_DELETE_REQUEST,
  NOTE_DELETE_SUCCESS,
  CHANGE_STATUS_2,
} from "../actions/actionTypes";

const initialNoteState = {
  loading: false,
  error: "",
  notes: [],
  success: false,
};

export const noteReducer = (state = initialNoteState, action) => {
  switch (action.type) {
    case NOTES_REQUEST:
    case NOTE_DELETE_REQUEST:
      return { ...state, loading: true, error: "" };
    case NOTES_SUCCESS:
      return {
        ...state,
        loading: false,
        notes: action.data,
        error: "",
      };
    case NOTES_FAIL:
      return { ...state, loading: false, notes: [], error: action.err };
    case NOTE_CREATE_REQUEST:
      return { ...state, loading: true, error: "" };
    case NOTE_CREATE_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case NOTE_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case NOTE_CREATE_REQUEST_FAIL:
    case NOTE_DELETE_FAILURE:
      return { ...state, loading: false, error: action.err };
    case CHANGE_STATUS_2:
      return { ...state, success: false };
    default:
      return state;
  }
};
