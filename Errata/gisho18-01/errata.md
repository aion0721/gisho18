# 「今から始める！React アプリ開発」第 1 版 正誤表

## 1.9:Node.js で API サーバを立ててみる。

```diff
import { Hono } from "hono";
import { serve } from "@hono/node-server";
+ import { cors } from "hono/cors";

const app = new Hono();

+ app.use("*", cors());

app.get("/users/:id", (c) => {
```
