import React from "react";
import { useTodoContext } from "../hooks/useTodoContext";
 

export const RecentlyAdded = () => {
  const { todolist } = useTodoContext();

  console.log("from RA",todolist);
  return (
    <section className=" daily_task  col-10 col-md-8 col-ls-6 m-3 d-flex flex-row gap-5 justify-content-center">
      <h6>Recently <br /> Added</h6>
      <div className="row ">
      {todolist && todolist.slice(0,3).map((item)=>{
        return (
          <div key={item._id} className={item.todo_status?"col-3 card border-2 border-success m-2":"col-4 card  border-2 border-danger m-2 w-25"}>
          <h4>{item.todo_title}</h4>
          <p className={item.todo_status?"text-success":"text-danger"}>{item.todo_status?"Completed":"Not Completed"}</p>
        </div>
        );
       })}
      </div>
    </section>
  );
};
