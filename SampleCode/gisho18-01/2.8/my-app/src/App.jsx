import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <>
      <h1>Todoアプリ</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAddTodo}>追加</button>

      <TodoList todos={todos} />
    </>
  );
}

export default App;
