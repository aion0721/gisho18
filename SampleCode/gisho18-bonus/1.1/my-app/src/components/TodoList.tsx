import type { TodoType } from "../types/todo";

const ulStyle = {
  listStyle: "none",
  padding: "0",
};

const liStyle = {
  padding: "0.5em 0",
  borderBottom: "1px solid #eee",
};

/** TodoList に渡す props */
type TodoListProps = {
  /** 表示するTodoのリスト */
  todos: TodoType[];
};

/**
 * Todoの一覧を表示するコンポーネント
 */
const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul style={ulStyle}>
      {todos.map((todo) => (
        <li style={liStyle} key={todo.id}>
          {todo.title} [{todo.status}]
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
