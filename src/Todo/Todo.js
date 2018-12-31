import React from 'react';
const todo = (props)=>{
    return (
            <li className={props.checked} onClick={props.click}>
            <p>{props.task}</p>
            </li>
    )
}
export default todo;


