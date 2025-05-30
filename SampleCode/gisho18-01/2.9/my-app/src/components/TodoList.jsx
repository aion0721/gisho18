const ulStyle = {
  listStyle: "none",
  padding: "0",
};

const liStyle = {
  padding: "0.5em 0",
  borderBottom: "1px solid #eee",
};

const TodoList = ({ todos }) => {
  return (
    <ul style={ulStyle}>
      {todos.map((todo, index) => (
        <li style={liStyle} key={index}>
          {todo}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
