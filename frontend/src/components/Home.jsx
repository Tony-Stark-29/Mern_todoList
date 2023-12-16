import React, { useEffect, useState } from "react";
import { AddTodo } from "./AddTodo";
import { Todo } from "./Todo";
import { useTodoContext } from "../hooks/useTodoContext";

export const Home = () => {
  const { todolist, dispatch } = useTodoContext();
  const { token } = JSON.parse(localStorage.getItem("user"))||{token:"iabuifaui"};
  const [err,setErr]=useState(null);
  const getdata = async () => {
    const res = await fetch("https://mytodo-mernapp-10m1.onrender.com/api/todolist", {
      headers: { Authorization: "Bearer " + token },
    });

    if (res.ok) {
      const data = await res.json();
      console.log(data);
      dispatch({ type: "SET", payload: data });
    } else {
     setErr(res.error);
    }
  };
  useEffect(() => {
 
  }, []);

  return (
    <div className="container p-lg-5">
       {err && <div className="text-danger">{err}</div>}
        <div className="d-flex flex-column flex-lg-row justify-items-sm-center align-items-start">
        <AddTodo />
        <div className="todo_container col-12 col-lg-6 d-flex flex-sm-row flex-column flex-wrap justify-content-evenly  ">
          {todolist  &&
            todolist.map((todo) => {
              return <Todo  todo={todo} />;
            })}
        
      </div>
        </div>
    </div>
  );
};
