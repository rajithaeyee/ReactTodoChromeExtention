import React from 'react';
import TodoText from '../TodoText/TodoText';

const todoAdder = (props)=>{
let taskName=""
return (
<div id="myDIV" className="header">
  <h2>My To Do List</h2>
  {/* <TodoText change={props.change} taskName={props.taskName}/>  */}
  <input onChange={props.change} type="text" id="myInput" placeholder="Todo Name" value={props.taskName}/>
  <span onClick={props.click} className="addBtn">Add</span>
</div>
);

}

export default todoAdder;