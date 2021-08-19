const jsxapi = require("jsxapi");
const { db } = require("./db");
const {
  listenToCallConnect,
  listenToCallDisconnect,
} = require("./listenToCalls");

module.exports = {
  async connect(deviceArray) {
    deviceArray.map((device) => {
      jsxapi
        .connect({
          host: device.hostname || device.ip,
          protocol: "wss:",
          username: device.username,
          password: device.password,
        })
        .on("error", (err) => console.log(err))
        .on("ready", async (xapi) => {
          const { panels, widgets } = require("../maps");
          console.log(`${device.hostname}${device.ip} has connected`);
          listenToCallConnect(xapi);
          xapi.Event.UserInterface.Extensions.Panel.Clicked.PanelId.on((event) => {
            try {
              panels.get(event).execute(xapi);
            } catch (error) {}
          });

          xapi.Event.UserInterface.Extensions.Widget.Action.on((event) => {
            try {
              widgets.get(event.WidgetId).execute(xapi)
            } catch (error) {}
          })
        });
    });
  },
};
