import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Button, Form } from "react-bootstrap";
import { createNote } from "../../actions/notesAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateNote = () => {
  const [heading, setHeading] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createNote(heading, desc, category));
  };
  const resetDefault = () => {
    setHeading("");
    setDesc("");
    setCategory("");
  };
  const Note = useSelector((state) => state.Notes);
  useEffect(() => {
    {
      Note.success && navigate("/mynotes");
    }
  });
  return (
    <div>
      <MainScreen title="Create Note">
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
              Create Note
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

export default CreateNote;
