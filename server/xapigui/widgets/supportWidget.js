module.exports = {
  name: "supportWidget",
  desc: "huh",
  execute(xapi) {
    xapi.Command.UserInterface.Message.TextInput.Display({
      Duration: 0,
      FeedbackId: 100,
      Placeholder: "Enter info here",
      SubmitText: "Submit",
      Text: "<p>Enter your phone number or email address, so IT Support can contact you, then press Submit</p>",
      Title: "Support Form",
    });
    xapi.Event.UserInterface.Message.TextInput.Response.on((event) => {
      console.log(event);
    });
  },
};
