import React from 'react';

const Item = (props) => {
    return(
        <li className={props.item.completed ? 'toggle' : ''}>
          {props.item.value}
          <button onClick={() => props.handleToggle(props.item)} style={{marginLeft: '10px', color: 'green'}}>toggle</button>
          <button onClick={() => props.handleRemove(props.item)} style={{marginLeft: '10px', color: 'green'}}>remove</button>
          <select style={{color: 'green'}}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
          </select>
        </li>
    )
}

export default Item