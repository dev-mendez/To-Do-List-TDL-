import React from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const FormC = (props) => {
  return (
    <div className="container mt-3">
      <Form onSubmit={props.onSubmit} className="mb-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task Name</Form.Label>
          <Form.Control
            type="text"
            name="task"
            onChange={props.onChange}
            placeholder="Task"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            onChange={props.onChange}
            rows={2}
          />
        </Form.Group>
        <Form.Label>Time</Form.Label>
        <Form.Label>Time</Form.Label>
        <Form.Range />
        <Button variant="secondary" type="submit">
          Add task
        </Button>
      </Form>
    </div>
  );
};

export default FormC;
