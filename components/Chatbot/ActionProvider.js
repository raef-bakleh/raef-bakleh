class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }
  greet() {
    const greetingMessage = this.createChatBotMessage("Hi there");
    this.updateChatbotMessage(greetingMessage);
  }
  dontUnderstand() {
    const message = this.createChatBotMessage("sorry didn't understand");
    this.updateChatbotMessage(message);
  }
  good() {
    const message = this.createChatBotMessage("all good, how are you");
    this.updateChatbotMessage(message);
  }
  updateChatbotMessage(message) {
    // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
