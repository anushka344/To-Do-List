import React, { useState } from 'react'



const Addtodo = ({addTodo}) => {
  const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

  const submit =(e)=>{
    e.preventDefault();
    if (!title || !desc) {
        alert("Title or Description cannot be blank");
    }
    else {
      addTodo(title, desc);
      setTitle("");
      setDesc("");
  }
  }
  return (
    <div className="container">
      <div style={{
   backgroundColor: "#4158D0",
    backgroundImage: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
    borderRadius:"15px",
    marginTop:"2%", 
   
    color:"white"
    
      }}>
        <h3 className='text-center py-2 ' >Add a ToDo</h3>
        </div>
<form onSubmit={submit}>
  <div class="mb-3">
   
      <label for="title" style={{fontWeight:"bold" , color:"white"}} class="form-label">ToDo Title</label>
      <input type="type" 
      style={{border: "2px solid pink",  margin:"5px" }}
      value={title} onChange={(e) => setTitle(e.target.value)}  id="title" class="form-control"/>
   
  </div>
  <div class="mb-3">
    <label for="desc"   style={{fontWeight:"bold" , color:"white"}} class="form-label">Add Description</label>
    <input type="text"
     style={{border: "2px solid pink",}}
    value={desc} onChange={(e) => setDesc(e.target.value)}  class="form-control" id="desc"/>
  </div>
  
  <button type="submit" style={{borderRadius:"10%",
    backgroundColor: "#4158D0",
     backgroundImage: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
    border: "2px solid #FB3FDE",
    color:"white",
    fontWeight:"bold"


    
}} class="btn btn-sm ">Add To Do</button>
</form>
      
    </div>
  )
}

export default Addtodo
