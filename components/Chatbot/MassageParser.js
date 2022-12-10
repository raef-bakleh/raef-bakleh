class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowMessage = message.toLowerCase();
    if (
      ["hi", "hello", "hallo", "hey", "alo"].some((element) =>
        lowMessage.includes(element)
      )
    ) {
      this.actionProvider.greet();
    } else if (
      ["how are you", "wie geht", "wie geht es dir"].some((element) =>
        lowMessage.includes(element)
      )
    ) {
      this.actionProvider.good();
    } else {
      this.actionProvider.dontUnderstand();
    }
  }
}

export default MessageParser;
