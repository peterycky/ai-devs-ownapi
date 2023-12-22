import { Elysia, t } from "elysia";
import { getGPTAnswer } from "./gpt";
// const API_KEY = process.env.API_KEY;

const PORT = process.env.APP_PORT;

const app = new Elysia()
  .get("/", () => "Hello World!")
  .post(
    "/aidevs2",
    async ({ body }) => {
      console.log("Question:", body.question);
      return getGPTAnswer(body.question);
    },
    {
      body: t.Object({
        question: t.String(),
      }),
    }
  )
  .listen(PORT || 3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
