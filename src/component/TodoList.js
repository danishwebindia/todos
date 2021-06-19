import React,{useState} from 'react'
import SingleTodo from './SingleTodo';
 const TodoList = () => {
    const data = [
        {id:0,task:'Create React App'},
        {id:1,task:'Add List of Todos'},
        {id:2,task:'Create Single Todo'},
        {id:3,task:'Add Todo'}
    ]
    let [todoList,setTodoList] = useState(data);

    const reset = ()=>{
        setTodoList([])
    }
    return (

        <div className="totoList">
            {todoList.map(elem=><SingleTodo key={elem.id} data={elem} />)}
            <div className="txt-right"><button onClick={reset} className="btn">Reset</button></div>
        </div>
        
    )
}

export default TodoList;