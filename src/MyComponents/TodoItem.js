import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
  return (
    <>
    <div class="row">
       <div class="card" style={{width: "20rem" ,
       borderRadius:"2px",  
 backgroundColor: "#4158D0",
 backgroundImage: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
 margin:"auto",
 borderWidth : "0",
 borderRadius:"15px",
      
      }}>
  
  <div class="card-body" style={{}} >
    <h4 class="card-title">  {todo.title} </h4>
    <p class="card-text"> {todo.desc} </p>
    <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}
     style={{borderRadius:"10%",
     border: "2px solid red",
     color:"white"}}>Delete</button> 
  </div>
</div>

</div>
        <hr/> 
        </>
)
  }
