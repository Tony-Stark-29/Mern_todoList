import React from 'react'
import { UserBtn } from './UserBtn'

export const Header = () => {
  return (
    <nav className='bg-dark text-light p-2'>

        <div className="d-flex flex-row justify-content-between">
        <h2>ToDo..</h2>
        <UserBtn/>
        </div>


    </nav>
  )
}

 