# 「次のステップへ！React アプリ開発」第 1 版 正誤表

## 1.10 ChakraUI

### vite-tsconfig-paths

インストール用のコマンドが誤っています

```diff
-yarnd add -D vite-tsconfig-paths
+yarn add -D vite-tsconfig-paths
```

## 2.10 ESLint

### ライブラリインストール

コマンドに不要なカンマが入ってました。

```diff
-yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
+yarn add -D @typescript-eslint/eslint-plugin, @typescript-eslint/parser
```

### テスト

本来は`index`変数が残っていれば警告が出るのですが、TypeScript の時点で修正してしまっているのでエラーが出力されません。

```diff
-2 つの問題が検出されていますね。
+1 つの問題が検出されていますね。

src/components/TodoList.tsx
React が定義されていない：ルール名「no-undef」
-index が定義されているが使われてない：ルール名「 @typescript-eslint/no-unused-vars」
```

エラーを見たい場合は、以下で修正してみてください。

- src/components.TodoList.tsx

```diff
-      {todos.map((todo) => (
+      {todos.map((todo, index) => (
        <li style={liStyle} key={todo.id}>
          {todo.title} [{todo.status}]
        </li>
      ))}
```

## 2.11 Vitest-UnitTest

### セットアップファイルの記載

セットアップファイルについての記載が不足しておりました。

```diff
-テストを始める前に、共通で使う設定をまとめる「セットアップファイル」を作ります。
+テストを始める前に、共通で使う設定をまとめる「セットアップファイル」を`src/setupTests.ts`として作ります。
```

## 2.13 Playwright-E2E

### baseURL

`my-todo-app`の設定をしていない場合もあるので、その場合は以下が正しいです。

```diff
  use: {
-    baseURL: "http://localhost:5173/my-todo-app/",
+    baseURL: "http://localhost:5173/",
    headless: false,
    viewport: { width: 1280, height: 720 },
    screenshot: "on",
  },
```

### テスト格納フォルダ

テスト格納フォルダは正しくは`tests`でした。

```diff
-test/todo.spec.ts
+tests/todo.spec.ts
```

### toHaveURL

`my-todo-app`の設定をしていない場合もあるので、その場合は以下が正しいです。

```diff
-await expect(page).toHaveURL(/\/my-todo-app\/?/);
+await expect(page).toHaveURL(/\//);
```

### テスト実施

テストを実施する際には、事前に開発サーバの起動が必要であり、その記載を追記

```diff
テスト実行は`yarn test:e2e`になります。コマンドを実行するとテストが実施され、HTML のレポートが出力されます。
+テストを実行する前に`yarn dev`で開発サーバを起動しておきましょう。
```

## 2.14 Playwright-VRT

### gitignore

gitignore の内容に誤りがあったため修正

```diff
-== Playwright
+# Playwright
playwright-report
test-results

+# Vitest
+coverage
```

## 2.15 Tauri

### yarn tauri init

URL の指定も必要であったため追記

```diff
- 入力する値
  - app name -> my-app
  - window title -> my-app
  - web assets -> ../dist
+  - what is the url -> http://localhost:5173
```

### アプリビルド

ビルド用のコマンドに誤りがあったため修正

```diff
-コマンドはyarn tauri devです。これを実行すると\src-tauri\target\release\app.exeのように バイナリファイルが生成されます。
+コマンドは`yarn tauri build`です。これを実行すると\src-tauri\target\release\app.exeのように バイナリファイルが生成されます。
```
