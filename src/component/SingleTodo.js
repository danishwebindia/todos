import React from 'react';

const SingleTodo = (props) => {
    const {id, task} = props.data;

    const removeElem = (id) =>{
        console.log(id);
    }
    return (
        <>
             <h1>{task} <div className="txt-right"><button onClick={()=>removeElem(id)} className="btn btn-xs">Remove</button></div></h1> 
        </>
    )
}

export default SingleTodo
