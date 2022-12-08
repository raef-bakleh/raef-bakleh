import React from "react";
import Chatbot from "react-chatbot-kit";
import MessageParser from "./MassageParser";
import ActionProvider from "./ActionProvider";
import config from "./config";
import classes from "./Chatbot.module.css";

function ChatbotComponent(props) {
  console.log(props.zindex);
  return (
    <div
      className={
        !props.zindex
          ? classes.chatbotContainer
          : classes.chatbotContainerClosed
      }
    >
      <Chatbot
        disableScrollToBottom={true}
        headerText={"hi there"}
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
        placeholderText={"Ask me something here"}
      />
    </div>
  );
}

export default ChatbotComponent;
