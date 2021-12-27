import { useState } from "react";
import { Button, Modal, Form, FormGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { addTodo } from "../../Store/actions/TodoActions";

const AddTodo = () => {
  const [modal, setModal] = useState(false);
  const [task, setTask] = useState({
    title: "",
    description: ""
  });

  const handleClose = () => setModal(false);
  const handleShow = () => setModal(true);

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        New task
      </Button>
      <Modal show={modal} onHide={handleClose}>
        <Modal.Header>Create new task</Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Group>
              <Form.Label for="title">Task name</Form.Label>
              <Form.Control type="text" value={task.title} name="title" id="title" placeholder="Please enter task name" />
            </Form.Group>
            <Form.Group>
              <Form.Label for="description">Task description</Form.Label>
              <Form.Control
                type="textarea"
                value={task.description}
                name="description"
                id="description"
                placeholder="Please enter task description"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit">Add</Button>
            <Button onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default AddTodo;
