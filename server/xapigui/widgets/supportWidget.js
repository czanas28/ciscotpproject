module.exports = {
  name: "supportWidget",
  desc: "huh",
  execute(xapi, hostname, type) {
    switch (type) {
      case 'clicked':
        xapi.Command.UserInterface.Message.TextInput.Display({
          Duration: 0,
          SubmitText: "Submit",
          Text: "<p>Enter your phone number or email address and IT Support will contact you shortly.</p>",
          Title: "Support",
        });
        xapi.Event.UserInterface.Message.TextInput.Response.on((event) => {
          const { email } = require('../../functions/nodemailer');
          
          console.log(event);
          const subject = event.Text
          email(process.env.SUPPORT_EMAIL_ADDRESS, `${hostname} has reported an issue`, `<p>Contact ${subject} for details on the issue being reported.</p>`, )
        });
        break;
      case 'pressed':
        break;
      case 'released':
        break;
      default: console.log(`Widget Action on ${hostname} did not match a case`);
    }
  },
};
