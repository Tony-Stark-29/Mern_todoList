import React, { useState } from "react";
import { useTodoContext } from "../hooks/useTodoContext";

export const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [error,setError]=useState(null);
  const {dispatch:todoDispatch}=useTodoContext();



  const handleSubmit=async (e)=>
  {

        e.preventDefault();

        const {token}=JSON.parse(localStorage.getItem('user'));
        console.log(token);

        const res=await fetch('/api/todolist',{
            method:'POST',
            headers:{
                'Authorization':'Bearer '+token,
                'Content-Type':'application/json'
                
            },
            body:JSON.stringify({todo_title:title,todo_description:description,todo_date:date})
        })

        if(res.ok)
        {
            const data=await res.json();
            todoDispatch({type:'ADD',payload:data})

        }
        else
        {
                setError(res.error);
        }

  }
  return (
    <form className="col-10 col-lg-6 form_shadow   py-5 px-3 my-5" onSubmit={handleSubmit}>
      <h3>New Task</h3>
      <input className="form-control my-3" type="text" placeholder="Title" onChange={(e)=>setTitle(e.target.value)} />
      <input className="form-control my-3" type="text" placeholder="Description" onChange={(e)=>setDescription(e.target.value)}/>
      <input className="form-control my-3" type="date" placeholder="End date" onChange={(e)=>setDate(e.target.value)} />

      <button className="btn btn-primary" type="submit">Add</button>
      {error && <div className="text-danger">{error}</div>}
    </form>
  );
};
