import axios from "axios";
import {
  CHANGE_STATUS_2,
  NOTES_FAIL,
  NOTES_REQUEST,
  NOTES_SUCCESS,
  NOTE_CREATE_REQUEST,
  NOTE_CREATE_REQUEST_FAIL,
  NOTE_CREATE_REQUEST_SUCCESS,
  NOTE_DELETE_FAILURE,
  NOTE_DELETE_REQUEST,
  NOTE_DELETE_SUCCESS,
} from "./actionTypes";

export const listNotes = () => async (dispatch) => {
  try {
    dispatch(noteStart());
    const { data } = await axios.get("/api/getNotes");
    dispatch(noteSuccess(data.reverse()));
  } catch (err) {
    dispatch(noteFail(err.toString()));
  }
};
function noteStart() {
  return { type: NOTES_REQUEST };
}
function noteFail(err) {
  return { type: NOTES_FAIL, err: err };
}
function noteSuccess(data) {
  return { type: NOTES_SUCCESS, data: data };
}

export const createNote = (heading, desc, category) => async (dispatch) => {
  try {
    dispatch(noteCreateStart());
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/createNote",
      { heading, desc, category },
      config
    );
    dispatch(noteCreateSuccess(data));
    dispatch(changeStatus());
  } catch (err) {
    dispatch(noteCreateFail(err.toString()));
  }
};
function noteCreateStart() {
  return { type: NOTE_CREATE_REQUEST };
}
function noteCreateSuccess(data) {
  return { type: NOTE_CREATE_REQUEST_SUCCESS, data };
}
function noteCreateFail(err) {
  return { type: NOTE_CREATE_REQUEST_FAIL, err };
}

export const deleteNote = (id) => async (dispatch) => {
  try {
    dispatch(deleteNoteRequest());
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    await axios.delete("/api/deleteNote", { data: { data: id } }, config);
    dispatch(deleteNoteSuccess());
    dispatch(listNotes());
  } catch (e) {
    dispatch(deleteNoteFailure(e.toString()));
  }
};
function deleteNoteRequest() {
  return { type: NOTE_DELETE_REQUEST };
}
function deleteNoteSuccess() {
  return { type: NOTE_DELETE_SUCCESS };
}
function deleteNoteFailure(err) {
  return { type: NOTE_DELETE_FAILURE, err };
}

function changeStatus() {
  return {
    type: CHANGE_STATUS_2,
  };
}
