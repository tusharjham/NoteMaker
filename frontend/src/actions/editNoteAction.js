import axios from "axios";
import {
  CLEAR_EDIT_NOTE,
  EDIT_NOTE_FAIL,
  EDIT_NOTE_START,
  EDIT_NOTE_SUCCESS,
  UPDATE_NOTE_FAIL,
  UPDATE_NOTE_REQUEST,
  UPDATE_NOTE_SUCCESS,
} from "./actionTypes";

function editNoteStart() {
  return { type: EDIT_NOTE_START };
}
export const getSingleNote = (id) => async (dispatch) => {
  try {
    dispatch(editNoteStart());
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post("/api/getSingleNote", { id }, config);
    dispatch(editNoteSuccess(data));
  } catch (err) {
    dispatch(editNoteFail(err.toString()));
  }
};
function editNoteSuccess(data) {
  return { type: EDIT_NOTE_SUCCESS, data: data };
}
function editNoteFail(err) {
  return { type: EDIT_NOTE_FAIL, err: err };
}
export function clearEditNote() {
  return { type: CLEAR_EDIT_NOTE };
}

export const updateNote = (id, heading, desc, category) => async (dispatch) => {
  try {
    dispatch(updateNoteRequest());
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    await axios.put("/api/updateNote", { id, heading, category, desc }, config);
    dispatch(updateNoteSuccess());
  } catch (err) {
    dispatch(updateNoteFail(err.toString()));
  }
};

function updateNoteRequest() {
  return { type: UPDATE_NOTE_REQUEST };
}
function updateNoteSuccess() {
  return { type: UPDATE_NOTE_SUCCESS };
}
export function updateNoteFail(err) {
  return { type: UPDATE_NOTE_FAIL, err: err };
}
