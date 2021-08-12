import React from 'react';
import Task from './task';

const List = (props) => {
  return (
    <div>
      <Task
        task={props.task}
        description={props.description}
        time={props.time}
        id={props.id}
        done={props.done}
        clickToDelete={props.clickToDelete}
        clickToComplete={props.clickToComplete}
      ></Task>
    </div>
  );
};

export default List;
