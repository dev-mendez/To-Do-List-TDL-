import React from 'react';
import { FaCheck, FaTrash } from 'react-icons/fa';
import { Card } from 'react-bootstrap';
import './hover.css';

const Task = (props) => {
  const style = {
    backgroundColor: props.done ? '#9BbD98' : null,
  };

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

        <Card.Footer style={style} className="d-flex justify-content-between">
          <div>
            <p>{props.time}</p>
          </div>
          <div>
            {' '}
            <FaCheck
              onClick={props.clickToComplete}
              className="mx-2 text-secondary  align-self-center"
            ></FaCheck>
            <span className="text-white mb-0 align-self-center user-select-none">
              |
            </span>
            <FaTrash
              className="mx-2 text-secondary  align-self-center"
              onClick={props.clickToDelete}
            ></FaTrash>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Task;
