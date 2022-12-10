import { createChatBotMessage, createCustomMessage } from "react-chatbot-kit";
import ContactOption from "./ContactOption/ContactOption";

const config = {
  botName: "raef",
  initialMessages: [
    createChatBotMessage(`Hi There, Ask me something`),

    createChatBotMessage("But dont't be hard on me. I am still learning", {
      delay: 1500,
    }),
  ],

  widgets: [
    {
      widgetName: "contactOption",
      widgetFunc: (props) => <ContactOption {...props} />,
      props: {
        options: [
          {
            url: "/#about",
          },
        ],
      },
    },
  ],
};

export default config;
