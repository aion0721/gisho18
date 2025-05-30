import { useState, useEffect } from "react";
import TodoList from "../components/TodoList.jsx";
import type { TodoType } from "../types/todo";
import H1 from "../components/common/H1.js";

const Todo = () => {
  const apiEndpoint = "	http://localhost:3000/todo";
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<TodoType[]>([]);

  const handleAddTodo = () => {
    const newTodo: TodoType = {
      id: crypto.randomUUID(),
      title: input,
      status: "NEW",
    };
    fetch(apiEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    })
      .catch((error) => console.error("Error adding todo:", error))
      .finally(() => {
        setTodos((prevTodos) => [...prevTodos, newTodo]);
        setInput("");
      });
  };

  useEffect(() => {
    fetch(apiEndpoint)
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);

  return (
    <>
      <H1>Todoアプリ</H1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAddTodo}>追加</button>
      <TodoList todos={todos} />
    </>
  );
};

export default Todo;
