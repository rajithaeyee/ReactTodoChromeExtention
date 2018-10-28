import React from 'react';
const todo = (props)=>{
    return (
        <div>
            <li className={props.checked} onClick={props.click}>
            <p>{props.task}</p>
            </li>
        </div>
    )
}
export default todo;


