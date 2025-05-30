import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "./Todo";
import { vi } from "vitest";

const mockTodos = [
  { id: "1", title: "Test Todo 1", status: "NEW" },
  { id: "2", title: "Test Todo 2", status: "NEW" },
];

type FetchMock = typeof fetch & { mockResolvedValueOnce: Function };

beforeEach(() => {
  globalThis.fetch = vi.fn();
});

afterEach(() => {
  vi.resetAllMocks();
});

describe("Todoコンポーネント", () => {
  test("タイトルが表示される", async () => {
    (fetch as FetchMock).mockResolvedValueOnce({
      json: async () => mockTodos,
    });
    render(<Todo />);
    // 非同期レンダリングを考慮してfindByTextで待つ
    expect(await screen.findByText("Todoアプリ")).toBeInTheDocument();
  });

  test("Todoリストの取得と表示", async () => {
    (fetch as FetchMock).mockResolvedValueOnce({
      json: async () => mockTodos,
    });
    render(<Todo />);
    // findByTextで個別に待つ
    // prettier-ignore
    expect( await screen.findByText(/Test Todo 1\s*\[NEW\]/)).toBeInTheDocument();
    // prettier-ignore
    expect( await screen.findByText(/Test Todo 2\s*\[NEW\]/)).toBeInTheDocument();
  });

  test("新しいTodoの追加", async () => {
    // 初期データ取得のモック
    (fetch as FetchMock).mockResolvedValueOnce({
      json: async () => mockTodos,
    });
    render(<Todo />);

    // POSTリクエストのモック
    (fetch as FetchMock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({}),
    });

    const user = userEvent.setup();
    await user.type(screen.getByRole("textbox"), "New Todo");
    await user.click(screen.getByText("追加"));

    // 追加後のリストを確認
    expect(await screen.findByText("New Todo [NEW]")).toBeInTheDocument();
  });
});
