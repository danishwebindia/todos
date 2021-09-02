import React from 'react';

const SingleTodo = (props) => {
    const {id, task} = props.data;

    
    return (
        <>
             <h1>{task} <div className="txt-right"><button onClick={()=>{props.removeElem(id)}}className="btn btn-xs">Remove</button></div></h1> 
        </>
    )
}

export default SingleTodo
