
import './App.css';
import Addtodo from './MyComponents/Addtodo';
import {Todos} from './MyComponents/Todos';
import React, { useState , useEffect } from 'react';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete=(todo)=>{
    console.log("i m on on delete");

   setTodos(todos.filter((e)=>{
      return e!==todo;
   }))
   localStorage.getItem("todos",JSON.stringify("todos"));
  }
 

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
   
    console.log(myTodo);
  }
  const [ todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    
    <div class="design">

   <Addtodo addTodo={addTodo}/>
   <Todos todos={todos} onDelete={onDelete}/>

    </div>
  );
}

export default App;
