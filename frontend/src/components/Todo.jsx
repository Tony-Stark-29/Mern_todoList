import React from 'react'

export const Todo = ({todo}) => {
  return (
    <div className='todo  container-flex border mt-5'>
        <h2 className='  bg-dark text-light p-1'>{todo.todo_title}</h2>
        <p className='   '>{todo.todo_description}</p>
        <div className='  '><i className="fa-regular fa-calendar-days"></i>   {todo.todo_date}</div>
      <div className="actions  px-5">
      <i className="fa-solid fa-trash" style={{color:"red"}} ></i>
      <i className="fa-solid fa-check" style={{color:"green"}}></i>
      </div>
      
    </div>
  )
}
