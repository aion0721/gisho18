# 「今から始める！React アプリ開発」第 1 版 正誤表

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

## 2.9 Todo アプリ

### APIEndpoint

完全に誤植です。申し訳ありません。

```diff
-const apiEndPoint = "http://rp.local:3000/todo";
+const apiEndPoint = "http://localhost:3000/todo";
```
