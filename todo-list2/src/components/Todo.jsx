import React, { useState } from 'react'

export const Todo = ({todo, onUpdate, onDelete}) => {

  const [isEdit, setIsEdit] = useState(false)

  

  const FormEdit = ()=>{

    const [newValue, setNewValue]=useState(todo.title)

    const handleSubmit = (e)=>{
      e.preventDefault()
    }
  
    const handleChange = (e)=>{
      const value=e.target.value
      setNewValue(value)
    }

    const handleClick = ()=>{
      onUpdate(todo.id, newValue)
      setIsEdit(false)
    }


    return(
      <form className='todoUpdateForm' onSubmit={handleSubmit}>
        <input type='text' className='todoInput' onChange={handleChange} value={newValue}/>
        <button className='button' onClick={handleClick}>Update</button>
      </form>
    )
  }

  const handleDelete = ()=>{
    onDelete(todo.id)
  }

  const TodoElement = ()=>{
    return(
      <div className='todoInfo'>
      <h2>{todo.title}</h2>
      {todo.completed ? <p>Esta completo</p> : <p>falta completar</p>}
      <button onClick={()=>setIsEdit(true)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      </div>
    )
  }

 

  return (
    <div>

      {isEdit ? <FormEdit/> : <TodoElement/>}

      
    </div>
  )
}
