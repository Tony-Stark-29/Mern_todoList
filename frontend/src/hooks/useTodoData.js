import { useState } from "react";
import { useTodoContext } from "./useTodoContext";

export const useTodoData = () => {
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
 

  const { token } = JSON.parse(localStorage.getItem("user"));
  const { dispatch: todoDispatch } = useTodoContext();

  const getData = async () => {
    const res = await fetch("https://mytodo-mernapp-10m1.onrender.com/api/todolist", {
      headers: { Authorization: "Bearer " + token },
    });

    if (res.ok) {
      const data = await res.json();
      todoDispatch({ type: "SET", payload: data });
    }
    if(!res.ok)
    { 
      setErr(res.error);
    }
  };

  const addData = async (title, description, date) => {
    setIsLoading(true);
    const res = await fetch("https://mytodo-mernapp-10m1.onrender.com/api/todolist", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todo_title: title,
        todo_description: description,
        todo_date: date,
      }),
    });
    const data = await res.json();
    if (res.ok) {
    
      todoDispatch({ type: "ADD", payload: data });
      setIsLoading(false)
    }

    if(!res.ok)
    {
      
      setErr(data.error)
      setIsLoading(false);
    }

     
  };
  const deleteData = async (id, update) => {
    const res=await fetch(`https://mytodo-mernapp-10m1.onrender.com/api/todolist/${id}`,{
      method:"DELETE",
      headers: {
        Authorization: "Bearer " + token,
    
      }
    })

    if(!res.ok)
    {
        setErr(res.error);
    }
    
    if(res.ok)
    {
      todoDispatch( {type:"DELETE",payload:{_id:id}});
    }

  };
  const updateData = async (id) => {


    const res=await fetch(`https://mytodo-mernapp-10m1.onrender.com/api/todolist/${id}`,{
      method:"PATCH",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        
        todo_status: true,
      }),
    })

    if(!res.ok)
    {
        setErr(res.error);
    }
    
    if(res.ok)
    {
      todoDispatch( {type:"UPDATE_STATUS",payload:{_id:id}});
    }


  };

  return { getData,addData,updateData,deleteData,err,isLoading,setErr};
};
