import { Elysia } from "elysia";

// const API_KEY = process.env.API_KEY;

const app = new Elysia().get("/", () => "Hello World!").listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
