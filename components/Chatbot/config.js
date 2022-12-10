import { createChatBotMessage, createCustomMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [
    createChatBotMessage(`Hi There, Ask me something`),
    createChatBotMessage("But dont't be hard on me. I am still learning", {
      delay: 1500,
    }),
  ],
};

export default config;
