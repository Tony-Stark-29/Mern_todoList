import React, { useEffect, useState } from "react";
import { AddTodo } from "./AddTodo";
import { Todo } from "./Todo";
import { Overview } from "./Overview";
import { RecentlyAdded } from "./RecentlyAdded";
import { useTodoData } from "../hooks/useTodoData";

export const Home = () => {
 
  const {getData}=useTodoData();

  useEffect(()=>{

    getData();

  },[])

  return (
    <section className="d-flex flex-column align-items-center">  
      <Overview />
      
      <AddTodo />  
    </section>
  );
};
