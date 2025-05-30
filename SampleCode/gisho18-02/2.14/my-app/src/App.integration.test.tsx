import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { vi } from "vitest";

type FetchMock = typeof fetch & {
  mockResolvedValueOnce: (value: any) => void;
  mockRejectedValueOnce: (value: any) => void;
};

const mockTodos = [
  { id: "1", title: "Test Todo 1", status: "NEW" },
  { id: "2", title: "Test Todo 2", status: "DONE" },
] as const;

describe("結合テスト", () => {
  beforeEach(() => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      json: async () => [],
    });
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  describe("正常系", () => {
    test("HomeとAboutページ間のナビゲーション", async () => {
      (fetch as FetchMock).mockResolvedValueOnce({
        json: async () => mockTodos,
      });

      render(
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      );

      // Homeページの確認
      expect(await screen.findByText("Todoアプリ")).toBeInTheDocument();

      // Aboutページに移動
      await userEvent.click(screen.getByText("About"));
      expect(screen.getByText("about")).toBeInTheDocument();

      // Homeページに戻る
      await userEvent.click(screen.getByText("Home"));
      expect(await screen.findByText("Todoアプリ")).toBeInTheDocument();
    });

    test("Todoの追加から表示までのフロー", async () => {
      // 初期データ取得のモック
      (fetch as FetchMock).mockResolvedValueOnce({
        json: async () => [],
      });

      // POSTリクエストのモック
      (fetch as FetchMock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({}),
      });

      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );

      // Todo追加操作
      await user.type(screen.getByRole("textbox"), "New Integration Todo");
      await user.click(screen.getByText("追加"));

      // 追加後の表示確認
      await waitFor(() => {
        expect(
          screen.getByText("New Integration Todo [NEW]")
        ).toBeInTheDocument();
      });
    });

    test("初期データ取得から表示までのフロー", async () => {
      // APIモック設定
      (fetch as FetchMock).mockResolvedValueOnce({
        json: async () => mockTodos,
      });

      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );

      // データ取得後の表示確認
      await waitFor(() => {
        expect(screen.getByText("Test Todo 1 [NEW]")).toBeInTheDocument();
        expect(screen.getByText("Test Todo 2 [DONE]")).toBeInTheDocument();
      });
    });
  });
  describe("異常系", () => {
    test("Todoリスト取得失敗時のエラー表示", async () => {
      (fetch as FetchMock).mockRejectedValueOnce(new Error("API Error"));

      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );

      await waitFor(() => {
        expect(
          screen.getByText("データの取得に失敗しました")
        ).toBeInTheDocument();
      });
    });
  });
});
