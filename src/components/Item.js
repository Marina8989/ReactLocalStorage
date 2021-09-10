import React from 'react';

const Item = (props) => {
    return(
        <>
          <li className={props.item.completed ? 'toggle' : ''}>
           {props.item.value}
           <button onClick={() => props.handleToggle(props.item)}>toggle</button>
           <button onClick={() => props.handleRemove(props.item)}>remove</button>
          </li> 
        </>
    )
}

export default Item