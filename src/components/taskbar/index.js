import React from 'react';

export default class  TaskBar extends React.Component{
render() {
  return(
    <div>
       <input type="text" ref="task" placeholder="add your task here" />
       <button>Add Task</button>
    </div>
  );
}

}
