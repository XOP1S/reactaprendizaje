import React from 'react'
import { FaRegEdit } from 'react-icons/Fa'
export const TodoUpdate = () => {
  return (
    <form>
      <input
        type="text"
        className="input-update"
        name="description2"
        value="Aprender Php"
        placeholder="¿Qué quieres hacer?"
      />

      <button className="btn-edit" type="submit">
        <FaRegEdit/>
      </button>
    </form>
  )
} 
