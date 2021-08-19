module.exports = {
  name: "support",
  desc: "Sends an email to IT support",
  async execute(xapi, hostname) {
    await xapi.Command.UserInterface.Message.TextInput.Display({
      Duration: 0,
      SubmitText: "Submit",
      Text: "<p>If you're experiencing an issue, enter your phone number or email address and IT Support will contact you shortly.</p>",
      Title: "Support",
    });
    await xapi.Event.UserInterface.Message.TextInput.Response.on((event) => {
      const { email } = require("../../functions/nodemailer");
      const subject = event.Text;
      email(
        process.env.SUPPORT_EMAIL_ADDRESS,
        `An issue is being reported on ${hostname}`,
        `<p>Contact ${subject} for details on the issue being reported.</p>`
      );
    });
  },
};
