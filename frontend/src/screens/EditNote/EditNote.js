import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  clearEditNote,
  getSingleNote,
  updateNote,
} from "../../actions/editNoteAction";
import LoadingMessage from "../../components/LoadingMessage";
import ErrorMessage from "../../components/ErrorMessage";

const EditNote = () => {
  const editNote = useSelector((state) => state.EditNote);
  const { loading, error, note } = editNote;
  const [heading, setHeading] = useState([]);
  const [desc, setDesc] = useState([]);
  const [category, setCategory] = useState([]);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const id = location.pathname.split("/")[2];
    dispatch(getSingleNote(id));
    return () => {
      dispatch(clearEditNote());
    };
  }, []);
  useEffect(() => {
    {
      editNote.success && navigate("/mynotes");
    }
    setHeading(note.heading);
    setDesc(note.desc);
    setCategory(note.category);
  }, [note.heading, note.desc, note.category, editNote.success]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateNote(note._id, heading, desc, category));
  };
  const resetDefault = () => {
    setHeading(note.heading);
    setDesc(note.desc);
    setCategory(note.category);
  };
  return (
    <div>
      <MainScreen title="Edit Note">
        <LoadingMessage status={loading} />
        <ErrorMessage error={error} />
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label>Heading</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Title of Note"
              className="w-25"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              required={true}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter Description"
              className="w-75"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              required={true}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Category"
              className="w-25"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required={true}
            />
          </Form.Group>
          <Form.Group className="mt-3 ">
            <Button variant="success" className="me-2 " type="submit">
              Update Note
            </Button>
            <Button variant="danger" onClick={resetDefault}>
              Reset
            </Button>
          </Form.Group>
        </Form>
      </MainScreen>
    </div>
  );
};

export default EditNote;
