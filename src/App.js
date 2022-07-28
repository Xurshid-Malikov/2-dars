import Form from "./components/Form";
import TodosList from "./components/TodosList";
import React from "react";
import "./app.css"

function App() {
  const [input, setInput] = React.useState("");
  const [todos, setTodos] = React.useState([]);
 
  return (
   
    <div className="container">
      <div>
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
        />
      </div>
      <div>
        <TodosList todos={todos} setTodos={setTodos} />
      </div>
    </div>

  );
}
export default App;