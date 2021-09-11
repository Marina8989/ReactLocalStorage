import React from 'react';

const Sort = (props) => {
     return(
         <button onClick={props.handleSort} style={{color: 'green'}}>sort</button>
     )
}

export default Sort