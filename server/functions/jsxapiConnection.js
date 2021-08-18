const jsxapi = require("jsxapi");
const { db } = require("./db");
const { listenToCallConnect, listenToCallDisconnect } = require('./listenToCalls');


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
          const { events } = require('../maps')
          console.log(`${device.hostname}${device.ip} has connected`);
          listenToCallConnect(xapi);
          events.get('widget').clicked(xapi);
        });
    });
  },
};
