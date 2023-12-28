import { ChatOpenAI } from "langchain/chat_models/openai";
import { BaseMessageLike, HumanMessage, SystemMessage } from "langchain/schema";

let messages: BaseMessageLike[] = [];

const model = new ChatOpenAI({
  modelName: "gpt-4",
});

export const getGPTAnswer = async (message: string) => {
  messages.push(new HumanMessage(message));

  const response = await model.invoke([
    new SystemMessage(
      "You are a very helpful assistant. If multiple questions asked, answer one by one. Answer ultra briefly!"
    ),
    ...messages,
  ]);

  return {
    reply: response.content,
  };
};
