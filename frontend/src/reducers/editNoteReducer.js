import {
  EDIT_NOTE_START,
  EDIT_NOTE_SUCCESS,
  EDIT_NOTE_FAIL,
  CLEAR_EDIT_NOTE,
  UPDATE_NOTE_REQUEST,
  UPDATE_NOTE_SUCCESS,
  UPDATE_NOTE_FAIL,
} from "../actions/actionTypes";

const initialEditNoteReducer = {
  loading: false,
  error: "",
  note: [],
  success: false,
};

export const editNoteReducer = (state = initialEditNoteReducer, action) => {
  switch (action.type) {
    case EDIT_NOTE_START:
    case UPDATE_NOTE_REQUEST:
      return { ...state, loading: true, error: "" };
    case EDIT_NOTE_SUCCESS:
      return { ...state, note: action.data, loading: false };
    case EDIT_NOTE_FAIL:
    case UPDATE_NOTE_FAIL:
      return { ...state, error: action.err, loading: false };
    case UPDATE_NOTE_SUCCESS:
      return { ...state, loading: false, error: "", success: true };
    case CLEAR_EDIT_NOTE:
      return { loading: false, error: "", note: [], success: false };
    default:
      return state;
  }
};
