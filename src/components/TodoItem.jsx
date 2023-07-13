import React from 'react'
import { PiTrashSimple } from 'react-icons/Pi'
import { TodoUpdate } from './TodoUpdate'

export const TodoItem = () => {
  return (
    <li>
    <span>
        <label htmlFor="" className='container-done'></label>
    </span>
    <TodoUpdate/>
    <button className="btn-delete"><PiTrashSimple /></button>
    </li>
  )
}
