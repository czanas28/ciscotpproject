module.exports = {
  name: "supportWidget",
  desc: "huh",
  execute(xapi) {
    xapi.Command.UserInterface.Message.TextInput.Display({
      Duration: 0,
    //   FeedbackId: 100,
      SubmitText: "Submit",
      Text: "<p>Enter your phone number or email address and IT Support will contact you shortly.</p>",
      Title: "Support",
    });
    xapi.Event.UserInterface.Message.TextInput.Response.on((event) => {
      console.log(event);
    });
  },
};
