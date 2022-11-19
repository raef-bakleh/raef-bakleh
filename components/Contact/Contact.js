import React, { useRef, useState } from "react";
import classes from "./Contact.module.css";
function Contact() {
  // const name = useRef('');
  //  var contact = {
  //   name
  // };
  useRef(() => {});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitMessage, setSubmitMessage] = useState(false);

  const nameHanlder = (name) => {
    setName(name.target.value);
  };
  const emailHanlder = (email) => {
    setEmail(email.target.value);
  };
  const phoneHanlder = (phone) => {
    setPhone(phone.target.value);
  };
  const messageHandler = (message) => {
    setMessage(message.target.value);
  };
  const sendContact = (event) => {
    const newReq = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };
    event.preventDefault();
    fetch(
      "https://portfolio-2d617-default-rtdb.europe-west1.firebasedatabase.app/message.json",
      {
        method: "POST",
        body: JSON.stringify({
          message: newReq,
        }),
      }
    );
    setTimeout(() => {
      setSubmitMessage(true);
    }, 100);

    setTimeout(() => {
      setSubmitMessage(false);
    }, 6000);

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };
  return (
    <div className={classes.section}>
      <div className={classes.contanct}>
        <h3 className={classes.head}>CONTACT</h3>
        <h1 className={classes.introTop}>Get In Touch</h1>
        <div className={classes.line}></div>
        {submitMessage && (
          <div className={classes.formSubmitted}>
            Thank you for contacting, will reach you out as soon as possible!
          </div>
        )}
        <form className={classes.form} onSubmit={sendContact} action="submit">
          <div className={classes.small}>
            <div className={classes.inputSmall}>
              <input
                required
                type="text"
                value={name}
                name="name"
                onChange={nameHanlder}
                id="name"
                className={` ${
                  name ? classes.smallInputHasValue : classes.smallInput
                }`}
              />
              <label id="name" htmlFor="name">
                Name
              </label>
            </div>
            <div className={classes.inputSmall}>
              <input
                required
                type="text"
                value={email}
                name="email"
                onChange={emailHanlder}
                id="email"
                className={` ${
                  email ? classes.smallInputHasValue : classes.smallInput
                }`}
              />
              <label id="email" htmlFor="email">
                Email
              </label>
            </div>
          </div>
          <div className={classes.inputBig}>
            <input
              type="number"
              value={phone}
              name="phone"
              onChange={phoneHanlder}
              id="phone"
              className={` ${
                phone ? classes.bigInputHasValue : classes.bigInput
              }`}
            />
            <label id="phone" htmlFor="phone">
              Phone
            </label>
          </div>
          <div style={{ height: "300px" }} className={classes.inputBig}>
            <textarea
              type="text"
              value={message}
              name="message"
              onChange={messageHandler}
              id="message"
              className={` ${
                message ? classes.bigInputHasValue : classes.bigInput
              }`}
              required
            ></textarea>
            <label id="message" htmlFor="message">
              Message
            </label>
          </div>

          <button className={classes.send}>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
