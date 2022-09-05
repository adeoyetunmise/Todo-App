import logo from './logo.svg';
import './App.css';
import '../src/assets/css/todo.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import DisplayTodo from './components/DisplayTodo';
import TodoInput from './components/TodoInput';
import { useState } from 'react'

function App() {
  const [allTodo, setallTodo] = useState([])
  const addTodo = (myTodo)=>{
    setallTodo(myTodo)
  }
  return (
   <>
   <TodoInput addTodo={addTodo}/>
   <DisplayTodo allTodo={allTodo}/>
   </>
  );
}

export default App;
