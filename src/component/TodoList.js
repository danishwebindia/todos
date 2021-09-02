import React,{useState} from 'react'
import SingleTodo from './SingleTodo';
import AddTodo from './AddTodo';
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

    const removeElem = (id) =>{
        let filteredData = todoList.filter(elem=>elem.id!==id);
        setTodoList(filteredData)
    }

    const addTask = (task)=>{
        let newTask = {id:data.length+1,task:task};
        setTodoList([...todoList,newTask]);
    }
    return (
        <div className="totoList">
            <h2 className="heading">Todo List</h2>
            <AddTodo addTask={addTask} />
            {todoList.map(elem=><SingleTodo key={elem.id} data={elem} removeElem={removeElem} />)}
            <div className="txt-right"><button onClick={reset} className="btn">Reset</button></div>
        </div>
        
    )
}

export default TodoList;