import { test, expect } from "@playwright/test";

test.describe("E2Eテスト", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test.describe("正常系", () => {
    test("ナビゲーションバーのリンク動作", async ({ page }) => {
      await page.getByRole("link", { name: "About" }).click();
      await expect(page).toHaveURL(/about/);
      await expect(page.getByRole("heading")).toHaveText("about");

      await page.getByRole("link", { name: "Home" }).click();
      await expect(page).toHaveURL(/\//);
    });

    test("Todoの追加と表示", async ({ page }) => {
      // サンプル文字列定義
      const todoTitle = "SampleTodo";
      // POSTとGETの両方をモック
      await page.route("http://localhost:3000/todo", async (route, request) => {
        if (request.method() === "POST") {
          const body = await request.postDataJSON();
          // API追加処理
          await route.fulfill({
            status: 201,
            contentType: "application/json",
            body: JSON.stringify(body),
          });
        } else if (request.method() === "GET") {
          // API一覧処理
          await route.fulfill({
            status: 200,
            contentType: "application/json",
            body: JSON.stringify([]),
          });
        }
      });

      // テキスト入力 → 追加ボタンをクリック
      await page.getByRole("textbox").fill(todoTitle);
      await page.getByRole("button", { name: "追加" }).click();

      // 追加された項目が表示されていることを確認
      await expect(page.getByText(`${todoTitle} [NEW]`)).toBeVisible();

      // 「データの取得に失敗しました」が出ていないことを確認
      const errorLocator = page.getByText("データの取得に失敗しました");
      await expect(errorLocator).not.toBeVisible();
    });
  });

  test.describe("異常系", () => {
    test("APIエラー表示", async ({ page }) => {
      await page.route("http://localhost:3000/todo", async (route) => {
        await route.abort();
      });

      await page.goto("/");
      await expect(page.getByText("データの取得に失敗しました")).toBeVisible();
    });
  });
});
