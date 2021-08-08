import React from 'react';
import Task from './task';

const List = (props) => {
  return (
    <div>
      <Task
        id={props.id}
        task={props.task}
        description={props.description}
        clickToDelete={props.clickToDelete}
        clickToEdit={props.clickToEdit}
      ></Task>
    </div>
  );
};

export default List;