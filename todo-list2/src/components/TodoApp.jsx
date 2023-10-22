import {useState} from "react"
import { Todo } from "./Todo"
import "./todoApp.css"

export const TodoApp = () => {

  const [title, setTitle] = useState("")
  const [todos, setTodos] = useState([])

  const handleChange=(e)=>{
    const value=e.target.value
    setTitle(value)
  }
  console.log(title)

  const handleSubmit=(e)=>{

    e.preventDefault()

    if (title==="") return

    const newTodo={
      id:crypto.randomUUID(),
      title:title,
      completed:false
    }

    setTodos([...todos, newTodo])
    setTitle("")
  }

  const handleUpdate = (id, value) => {
    const item=todos.find(el=>el.id===id)
    item.title=value
    setTodos(todos)
  }

  const handleDelete = (id) =>{
    const data=todos.filter(elm=>elm.id!==id)
    setTodos(data)
  }

  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input 
          className="todoInput"
          type="text"
          placeholder="write your task"
          value={title}
          onChange={handleChange}
        />
        <input 
          className="buttonCreate"
          type="submit"
          value="Create todo"
          onClick={handleSubmit}
        />
      </form>

      <div className="todosContainer">
        {todos.map(todo=>(
          <Todo key={todo.id}
           todo={todo}
           onUpdate={handleUpdate}
           onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  )
}
