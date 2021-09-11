import React from 'react';

const Item = (props) => {
    return(
        <li className={props.item.completed ? 'toggle' : ''}>
          {props.item.value}
          <button onClick={() => props.handleToggle(props.item)} style={{marginLeft: '10px', color: 'green'}}>toggle</button>
          <button onClick={() => props.handleRemove(props.item)} style={{marginLeft: '10px', color: 'green'}}>remove</button>
        </li>
    )
}

export default Item