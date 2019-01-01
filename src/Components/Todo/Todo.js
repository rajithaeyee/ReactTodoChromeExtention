import React from 'react';

import close from '../../assests/images/close.png';
import './Todo.css';

const todo = (props)=>{
    return (
        <div>
            <img src={close} className="icon-close" onClick={props.delete}></img>
            <li className={props.checked} onClick={props.click}>
                <p>{props.task}</p>
            </li>
        </div>
    )
}
export default todo;


