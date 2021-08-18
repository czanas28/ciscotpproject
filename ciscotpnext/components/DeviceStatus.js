import { useEffect, useState } from "react";
const jsxapi = require("jsxapi");

import styles from "../styles/DeviceStatus.module.css";

export default function DeviceStatus({ device }) {
  const [connected, setConnected] = useState();
  const [connectedMsg, setConnectedMsg] = useState("Connecting...");
  const [cbn, setCbn] = useState("Not in call");

  let url = device.hostname ? device.hostname : device.ip;

  const connectToDevice = () => {
    jsxapi
      .connect({
        host: device.hostname || device.ip,
        protocol: "wss:",
        username: device.username,
        password: device.password,
      })
      .on("error", (err) => {
        console.log(err);
        setConnected(false);
        setConnectedMsg("Failed to connect");
      })
      .on("ready", async (xapi) => {
        setConnected(true);
        setConnectedMsg("Connected");
        const call = await xapi.Status.Call.get();
        if (call.length > 0) {
          const cbNum = call[0].CallbackNumber;
          setCbn(cbNum);
        }

        xapi.Event.CallSuccessful.on(async () => {
          const call = await xapi.Status.Call.get();
          const cbNum = call[0].CallbackNumber;
          setCbn(cbNum);
        });

        xapi.Event.CallDisconnect.on(() => {
          setCbn("Not in call");
        });
      });
  };

  useEffect(() => {
    if (connected) {
      return;
    } else {
      const interval = setInterval(() => {
        connectToDevice();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [connected]);

  return (
    <div>
      <a className={styles.a} href={`https://${url}/`} target="_blank">
        {device.hostname || device.ip}
      </a>
      {` | Device Status: ${connectedMsg} | Call Status: ${cbn}`}
    </div>
  );
}
