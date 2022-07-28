import React from "react";
import "./todos.css"

function TodosList({ todos, setTodos }) {
  const handleComplete = (todo) => {
    setTodos(
      todo.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed }
        }
        return item;
      })
    )
  }
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className="div">
          <input onClick={() => handleComplete(todo)} type="checkbox" />
          <h3 onChange={(event) => event.preventDefault()}>{todo.title}</h3>
          <button>Edit</button>
          <button onClick={() => handleDelete(todo)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default TodosList;