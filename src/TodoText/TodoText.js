import React from 'react';
const todoText = (props) => {
    return (
        <div>
            <input onChange={props.change} type="text" id="myInput" placeholder="Todo Name" value={props.taskName}/>
        </div>
    );

}
export default todoText;