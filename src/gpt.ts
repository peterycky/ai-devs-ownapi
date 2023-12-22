import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanMessage, SystemMessage } from "langchain/schema";

const model = new ChatOpenAI({
  modelName: "gpt-4",
});

export const getGPTAnswer = async (message: string) => {
  const response = await model.invoke([
    new SystemMessage(
      "You are a very helpful assistant. If multiple questions asked, answer one by one. Answer ultra briefly!"
    ),
    new HumanMessage(message),
  ]);

  return {
    reply: response.content,
  };
};
