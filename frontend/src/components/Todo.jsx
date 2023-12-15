import React from 'react'

export const Todo = ({todo}) => {
  return (
    <div className='todo container-flex border my-5'>
        <h2 className='border bg-dark text-light p-1'>{todo.todo_title}</h2>
        <p className='border  '>{todo.todo_description}</p>
        <div className='border  '>Dead line : {todo.todo_date}</div>
    </div>
  )
}
