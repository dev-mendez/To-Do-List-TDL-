import React from 'react';
import { Card } from 'react-bootstrap';

const Task = (props) => {
  return (
    <div>
      <Card className="my-3">
        <Card.Body>
          <Card.Title>{props.task}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Link className="btn btn-danger" onClick={props.clickToDelete}>
            Delete
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Task;
