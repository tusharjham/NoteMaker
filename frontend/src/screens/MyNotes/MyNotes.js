import React, { useEffect } from "react";
import { Button, Accordion, Card, Badge } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote, listNotes } from "../../actions/notesAction";
import ErrorMessage from "../../components/ErrorMessage";
import LoadingMessage from "../../components/LoadingMessage";

const MyNotes = ({ search }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.User);
  const Notes = useSelector((state) => state.Notes);
  const { notes, error, loading } = Notes;
  const { isLoggedIn, userInfo } = userLogin;
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure want to delete it")) {
      dispatch(deleteNote(id));
    }
  };
  useEffect(() => {
    {
      !isLoggedIn && navigate("/login");
    }
    dispatch(listNotes());
  }, [dispatch, isLoggedIn]);
  return (
    <div>
      <MainScreen title={`Welcom back ${userInfo.name}`}>
        <ErrorMessage error={error} />
        <Button size="lg" variant="success">
          <Link
            to="/mynotes/createnote"
            style={{ textDecoration: "none", color: "whitesmoke" }}
          >
            Create a Note
          </Link>
        </Button>
        <LoadingMessage status={loading} />
        {notes
          .filter((filteredNote) =>
            filteredNote.heading.toLowerCase().includes(search.toLowerCase())
          )
          .map((note) => {
            return (
              <Accordion className="mt-1 border-none" key={note._id}>
                <Accordion.Item eventKey="0">
                  <Card className="mt-3">
                    <Card.Header
                      style={{ flex: "1", cursor: "pointer" }}
                      className="d-flex justify-content-between"
                    >
                      <div style={{ fontSize: "1.2rem", width: "80%" }}>
                        <Accordion.Header>{note.heading}</Accordion.Header>
                      </div>
                      <div className="mt-2">
                        <Link to={`/mynotes/${note._id}`}>
                          <Button variant="warning" size="sm">
                            Edit
                          </Button>
                        </Link>
                        <Button
                          variant="danger"
                          size="sm"
                          className="ms-1"
                          onClick={() => deleteHandler(note._id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </Card.Header>
                    <Accordion.Body>
                      <Card.Body className="mt-0 ms-3 mb-2 p-0">
                        <h6>
                          <Badge className="bg-dark text-white mt-2 mb-0">
                            {`Category ${note.category}`}
                          </Badge>
                        </h6>
                        <Card.Text>{note.desc}</Card.Text>
                      </Card.Body>
                    </Accordion.Body>
                  </Card>
                </Accordion.Item>
              </Accordion>
            );
          })}
      </MainScreen>
    </div>
  );
};

export default MyNotes;
