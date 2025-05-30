const { Hono } = require("hono");
const { serve } = require("@hono/node-server");

const app = new Hono();

app.get("/", (c) => c.text("Hello Hono!"));

serve({
  fetch: app.fetch,
  port: 3000,
});

console.log("Server is running on http://localhost:3000");
