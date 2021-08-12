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
            placeholder="Do something today"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Task description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            onChange={props.onChange}
            rows={2}
            placeholder="Optional put a short description."
          />
        </Form.Group>
        <Form.Label>
          Time in (h) <span>{props.state.range || 12}</span>
        </Form.Label>
        <Form.Range
          name="range"
          min={0.5}
          max={24}
          step={0.5}
          onChange={props.onChange}
        />
        <Button variant="secondary" type="submit">
          Add task
        </Button>
      </Form>
    </div>
  );
};

export default FormC;
