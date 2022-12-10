import Link from "next/link";
import React from "react";
import classes from "./Chatbot.module.css";
const ContactOption = (props) => {
  const options = [{ text: "contact form", handler: () => {}, id: 1 }];

  const optionMarkup = options.map((option) => (
    <button className={classes.widgetButton} onClick={option.handler}>
      <Link
        style={{ textDecoration: "none", fontSize: "15px", color: "black" }}
        href={"/#contact"}
        scroll={false}
      >
        {option.text}
      </Link>
    </button>
  ));
  return <div>{optionMarkup}</div>;
};
export default ContactOption;
