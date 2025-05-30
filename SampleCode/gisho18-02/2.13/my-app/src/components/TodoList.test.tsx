import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList";
import type { TodoType } from "../types/todo";

describe("TodoListコンポーネント", () => {
  test("NEWのTodoが正しく表示される", () => {
    const newTodos: TodoType[] = [{ id: "1", title: "Todo 1", status: "NEW" }];
    render(<TodoList todos={newTodos} />);
    expect(screen.getByText("Todo 1 [NEW]")).toBeInTheDocument();
  });

  test("DONEのTodoが正しく表示される", () => {
    const doneTodos: TodoType[] = [
      { id: "2", title: "Todo 2", status: "DONE" },
    ];
    render(<TodoList todos={doneTodos} />);
    expect(screen.getByText("Todo 2 [DONE]")).toBeInTheDocument();
  });
});
