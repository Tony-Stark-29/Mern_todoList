import React from "react";
import { useTodoContext } from "../hooks/useTodoContext";

export const Overview = () => {
  const { todolist } = useTodoContext();
  return (
    <section className=" col-12 col-md-8 col-ls-6 m-2 m-lg-5">
      <div className="row overview justify-content-evenly">
        <div className="col-10 col-lg-3 m-1 border border-2 border-warning  form_shadow d-flex flex-row flex-lg-column justify-content-between align-items-center">
          <i className="fa-solid fa-list-check text-warning"></i>
          <h6 className=" text-warning">Total Task</h6>
          <p>{todolist && todolist.length}</p>
        </div>
        <div className="col-10 col-lg-3 m-1 border border-2 border-success form_shadow d-flex flex-row flex-lg-column justify-content-between align-items-center">
          <i className="fa-solid fa-list-check  text-success"></i>
          <h6 className=" text-success"> Completed</h6>
          <p>{todolist && todolist.filter(item=> item.todo_status && item).length}</p>
        </div>
        <div className="col-10 col-lg-3 m-1 border border-2 border-danger form_shadow d-flex flex-row flex-lg-column justify-content-between align-items-center">
          <i className="fa-solid fa-list-check  text-danger"></i>
          <h6 className=" text-danger"> Uncompleted</h6>
          <p>{todolist && todolist.filter(item=> !item.todo_status && item).length}</p>
        </div>
      </div>
    </section>
  );
};
