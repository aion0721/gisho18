import { useState, useEffect } from "react";
import TodoList from "../components/TodoList.jsx";

const Todo = () => {
  const apiEndpoint = "	http://localhost:3000/todo";

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([""]);

  const handleAddTodo = () => {
    fetch(apiEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    })
      .then(() => {
        setTodos([...todos, input]);
        setInput("");
      })
      .catch((error) => console.error("Error adding todo:", error));
  };

  useEffect(() => {
    fetch(apiEndpoint)
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);

  return (
    <>
      <h1>Todoアプリ</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAddTodo}>追加</button>
      <TodoList todos={todos} />
    </>
  );
};

export default Todo;
