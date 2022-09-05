import React, { useState } from 'react'


const TodoInput = () => {
  const [todos, settodos] = useState("")
  const [alltodos, setalltodos] = useState([])
  const [editedTodo, seteditedTodo] = useState(0)
  const [editedInput, seteditedInput] = useState({})
  const [editTodos, seteditTodos] = useState("")
  const [count, setcount] = useState("no")
  const [compulsory, setcompulsory] = useState("")
  
    const addTodo = ()=>{
      if (todos!=="") {
        let newTodo = {todos}
      setalltodos([...alltodos,newTodo])
      setcount(alltodos.length + 1)
      settodos("")
      setcompulsory("")
      
      }else{
        setcompulsory("Input Your Todo!!!")
      }
    }
    const deleteTodo = (todoIndex)=>{
      let newAllTodos = [...alltodos]
      let filteredTodos=newAllTodos.filter((todo,index)=>(index!=todoIndex))
      setalltodos(filteredTodos)
      setcount(alltodos.length - 1)
    }

    const editTodo = (index)=>{
      seteditedTodo(index)
      let currentTodo = alltodos[index]
      seteditTodos(currentTodo.todos)
      seteditedInput(currentTodo)

    }
    const updateDetails = ()=>{
      let updatedDetails = {todos:editTodos}
      let newAllTodos = [...alltodos]
      newAllTodos[editedTodo] = updatedDetails
      setalltodos(newAllTodos)
      console.log(newAllTodos);
      
    }
   

  return (
    <>
      <center>
      <h1 className='text-white my-5'>My To-Do List</h1>
      <p className='text-danger'>{compulsory}</p>
      <div className='col-lg-4 shadow-sm'>
      <input type="text" placeholder="Enter Your Todo" className="form-control my-2  "onChange={(e) => settodos(e.target.value)}
      value={todos}/>
      
      <button className="btn btn-success" onClick={() => addTodo()}>Add Todo</button>
      </div>
     

    <div className='  col-lg-5 text-center justify-content-center my-1'>
      <table className="table col-lg-5 mx-auto text-white">
        
      <thead>
          <tr>
              <th >S/N</th>
              <th>Todo</th>
              <th>Actions</th>
          </tr>
        </thead>
    {
            alltodos.map((input,index)=>(
              <>
            
              <tbody>
              <tr key={index}>
                  <td>{index+1}</td>
                  <td>{input.todos}</td>
                  
                  <td>
                      <button  type='button' data-bs-toggle="modal"  data-bs-target="#exampleModal" className='btn bg-white text-dark mx-1' onClick={()=>editTodo(index)}>Edit</button>
                      <button  className="btn bg-danger mx-1" onClick={()=>deleteTodo(index)}>Delete</button>
                  </td>
              </tr>
              </tbody>
           

  <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
          <div className="modal-content">
          <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit Todo {editedTodo.todos}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
      <div className="modal-body">
      <input type="text" className='form-control my-2' value={editTodos} onChange={(e)=>seteditTodos(e.target.value)} /> 
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={updateDetails} data-bs-dismiss="modal">Save changes</button>
        
      </div>
    </div>
  </div>
</div>      



                          </>
          ))
          }
      </table>
      
    </div>
    <p className='text-white mx-1'>You have {count} pending task(s).</p>

    </center>
    
    </>
  );
}

export default TodoInput
{
  <>


</>
}