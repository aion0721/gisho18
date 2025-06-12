# 「今から始める！React アプリ開発」第 1 版 正誤表

## 1.6 シンプルなページ

### リンクの作成

aboutme.html の画像の横幅指定（`width`）のスペルミス

```diff
    <h2>Image</h2>
-    <img src="aboutme.png" alt="Aboutme" widht="250px" height="250px" />
+    <img src="aboutme.png" alt="Aboutme" width="250px" height="250px" />
```

## 1.9:Node.js で API サーバを立ててみる。

### CORS 対応

そのままだとエラーになってしまうので CORS 対応をします。

CORS について何？というのは調べてみてください。

```diff
import { Hono } from "hono";
import { serve } from "@hono/node-server";
+import { cors } from "hono/cors";

const app = new Hono();

+app.use("*", cors());

app.get("/users/:id", (c) => {
```

### フロントエンド側のコード

API サーバは HTTPS 対応をしていないので、HTTP での通信となります。

```diff
- const apiUrl = "https://localhost:3000/users/1";
+ const apiUrl = "http://localhost:3000/users/1";
```

## 2.9 Todo アプリ

### ページ遷移(誤)

a タグの属性に誤りがありました。

```diff
-<a href="/">Home</a>|< to="/about">About</>
+<a href="/">Home</a>|<a href="/about">About</a>
```

### APIEndpoint

完全に誤植です。申し訳ありません。

```diff
-const apiEndPoint = "http://rp.local:3000/todo";
+const apiEndPoint = "http://localhost:3000/todo";
```
