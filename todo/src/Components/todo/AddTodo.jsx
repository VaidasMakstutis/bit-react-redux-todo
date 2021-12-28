import { useState } from "react";
import { Button, Modal, Form, FormGroup } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { connect } from "react-redux";
import { addTodo } from "../../Store/actions/TodoActions";

const AddTodo = (props) => {
  const [modal, setModal] = useState(false);
  const [task, setTask] = useState({
    title: "",
    description: ""
  });

  const handleClose = () => setModal(false);
  const handleShow = () => setModal(true);

  const handleChange = (e) => {
    setTask(
      {
        ...task,
        [e.target.name]: e.target.value
      }
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = parseInt(Date.now())
    const todo = {
      ...task,
      isComplete: false,
      id: id
    }
    props.addTodo(todo)
    setTask({})
    setModal(false)
  }

  console.log(task);

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        New task
      </Button>
      <Modal show={modal} onHide={handleClose}>
        <Modal.Header>Create New task</Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group>
              <Form.Label for="title">Task name</Form.Label>
              <Form.Control 
              type="text" 
              value={task.title} 
              onChange={handleChange} 
              name="title" 
              id="title" 
              placeholder="Please enter task name" />
            </Form.Group>
            <Form.Group>
              <Form.Label for="title">Task description</Form.Label>
              <Form.Control
                type="textarea"
                value={task.description}
                onChange={handleChange}
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

export default connect(null, {addTodo})(AddTodo);