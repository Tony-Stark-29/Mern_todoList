import React from "react";
import { useTodoContext } from "../hooks/useTodoContext";
import { useTodoData } from "../hooks/useTodoData";

export const Today = () => {
  const { todolist } = useTodoContext();
  const todayDate =
    new Date().getFullYear() +
    "-" +
    new Date().getMonth() +
    "-" +
    new Date().getUTCDate();

  const { deleteData, updateData, err } = useTodoData();

  return (
    <section className="container">
      <div className="col-12 mt-3  ">
        <div className="row bg-dark text-light p-3">
          <div className="col-6 col-lg-3 text-break">Title</div>
          <div className="col-3 col-lg-3 d-none d-lg-block">Description</div>
          <div className="col-3 col-lg-3">Deadline</div>
          <div className="col-3 col-lg-3">Actions</div>
        </div>
        {todolist &&
          todolist
            .filter((item) => item.todo_date === todayDate)
            .map(item =>  
              <div key={item._id} className="row border-bottom border-1 border-secondary p-3">
                <div className="col-6 col-lg-3 text-break">
                  {item.todo_title}
                </div>
                <div className="col-3 col-lg-3 d-none d-lg-block">
                  {item.todo_description}
                </div>
                <div className="col-3 col-lg-3">{item.todo_date}</div>
                <div className="col-3 col-lg-3 ">
                  <i
                    className="col-6 fa-solid fa-trash"
                    style={{ color: "red" }}
                    onClick={() => {
                      deleteData(item._id);
                    }}
                  ></i>
                  {!item.todo_status && (
                    <i
                      className="col-6 fa-solid fa-check"
                      style={{ color: "green" }}
                      onClick={() => {
                        updateData(item._id);
                      }}
                    ></i>
                  )}
                </div>
              </div>
          )}
      </div>
      {err && <div>{err}</div>}
    </section>
  );
};
