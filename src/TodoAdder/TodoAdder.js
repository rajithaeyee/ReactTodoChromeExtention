import React from 'react';

const todoAdder = (props)=>{

return (
<div id="myDIV" className="header">
  <h2>My To Do List</h2>
  {/* <TodoText change={props.change} taskName={props.taskName}/>  */}
  <input onChange={props.change} type="text" id="myInput" placeholder="Todo Name" value={props.taskName} onKeyPress={props.enterPressed}/>
  <span onClick={props.click} className="addBtn">Add</span>
</div>
);

}

export default todoAdder;