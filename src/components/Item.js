import React from 'react';

const Item = ({item, handleToggle, handleRemove, handlePriority}) => {
   const handleChange = (e) => {
      handlePriority(item, e.target.value);
   }
    return(
        <>
          <li className={item.completed ? 'toggle' : ''}>
           {item.value}
           <button onClick={() => handleToggle(item)}>toggle</button>
           <button onClick={() => handleRemove(item)}>remove</button>
           <select onChange={handleChange} style={{color: 'green'}}>
             <option value={1}>1</option>
             <option value={2}>2</option>
             <option value={3}>3</option>
             <option value={4}>4</option>
             <option value={5}>5</option>
           </select>
          </li> 
        </>
    )
}

export default Item