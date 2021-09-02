import React, {useState,useEffect} from 'react'

const AddTodo = ({addTask}) => {
    let [isForm, setIsForm] = useState(false);
    const [task, setTask] = useState('');
    const showForm = ()=>{
        isForm = true;
        setIsForm(isForm)
        
    }
    const clearForm =()=>{
        isForm = false;
        setIsForm(isForm)
    }


    
    return (
        <>  {
        isForm?
        <div>
                <input type="text" className="input" name="task" value={task} onChange={(e)=>setTask(e.target.value)}  />&nbsp;&nbsp;&nbsp;<button className="btn btn-green" onClick={()=>addTask(task)}>Add</button>&nbsp;&nbsp;&nbsp;
                <button onClick={clearForm} className="btn">Clear</button>
        </div>
        :
        <div className="btn-add"><button className="btn" onClick={showForm}>Add</button></div>
        }
            
            
        </>
    )
}

export default AddTodo
