import React from 'react';
import { FaCheck, FaTrash } from 'react-icons/fa';
import { Card } from 'react-bootstrap';

const Task = (props) => {
  return (
    <div>
      <Card
        className="my-3"
        style={{
          boxShadow: '1px 1px 11px 0px rgba(50, 46, 50, 0.55)',
        }}
      >
        <Card.Body>
          <Card.Title>{props.task}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>

        <Card.Footer className="">
          <Card.Link
            className="btn btn-secondary float-end mx-2"
            onClick={props.clickToComplete}
          >
            <FaCheck className=" text-light"></FaCheck>
          </Card.Link>
          <Card.Link
            className="btn btn-secondary   float-end mx-2"
            onClick={props.clickToDelete}
          >
            <FaTrash className=" text-light"></FaTrash>
          </Card.Link>{' '}
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Task;
