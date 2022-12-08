import React from "react";
import Chatbot from "react-chatbot-kit";
import MessageParser from "./MassageParser";
import ActionProvider from "./ActionProvider";
import config from "./config";
import classes from "./Chatbot.module.css";
import "react-chatbot-kit/build/main.css";

function ChatbotComponent() {
  return (
    <header className={classes.chatbotContainer}>
      <div className=""></div>
      <Chatbot
        disableScrollToBottom={true}
        headerText={"hi there"}
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
        placeholderText={"Ask me something here"}
      />
    </header>
  );
}

export default ChatbotComponent;
