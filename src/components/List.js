import React from 'react';
import Item from './Item';

const List = (props) => {
    return(
        <ul >
           {props.list.map(item => <Item key={item.id } item={item} handleToggle={props.handleToggle} handleRemove={props.handleRemove}/>)}
        </ul>
    )
}

export default List 