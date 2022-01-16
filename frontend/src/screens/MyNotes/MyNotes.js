import React from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import Notes from "../../data/notes";

const MyNotes = () => {
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure want to delete it")) {
      console.log("deleted");
    }
  };
  return (
    <div>
      <MainScreen title="Welcome back Tushar">
        <Button size="lg" variant="success">
          <Link
            to="createnewnote"
            style={{ textDecoration: "none", color: "whitesmoke" }}
          >
            Create a Note
          </Link>
        </Button>
        {Notes.map((note) => (
          <Accordion className="mt-1 border-none">
            <Accordion.Item eventKey="0">
              <Card className="mt-3">
                <Card.Header
                  style={{ flex: "1", cursor: "pointer" }}
                  className="d-flex justify-content-between"
                >
                  <div style={{ fontSize: "1.2rem", width: "80%" }}>
                    <Accordion.Header>{note.title}</Accordion.Header>
                  </div>
                  <div className="mt-2">
                    <Button
                      href={`/notes/${note._id}`}
                      variant="warning"
                      size="sm"
                    >
                      Edit
                    </Button>
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
                        Category
                      </Badge>
                    </h6>
                    <Card.Text>{note.desc}</Card.Text>
                  </Card.Body>
                </Accordion.Body>
              </Card>
            </Accordion.Item>
          </Accordion>
        ))}
      </MainScreen>
    </div>
  );
};

export default MyNotes;
