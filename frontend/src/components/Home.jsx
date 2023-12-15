import React, { useEffect, useState } from "react";
import { AddTodo } from "./AddTodo";
import { Todo } from "./Todo";
import { useTodoContext } from "../hooks/useTodoContext";

export const Home = () => {
  const { todolist, dispatch } = useTodoContext();
  const { token } = JSON.parse(localStorage.getItem("user"));
  const [err,setErr]=useState(null);
  const getdata = async () => {
    const res = await fetch("/api/todolist", {
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

    getdata();
  }, []);

  return (
    <div className="container ">
       {err && <div className="text-danger">{err}</div>}
        <div className="row justify-content-center">
        <AddTodo />
        <div className=" col-xs-6 col-lg-8 d-flex flex-wrap">
          {todolist  &&
            todolist.map((todo) => {
              return <Todo  todo={todo} />;
            })}
        
      </div>
        </div>
    </div>
  );
};
