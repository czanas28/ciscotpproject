import { useEffect, useState } from "react";
const jsxapi = require("jsxapi");

import styles from "../styles/DeviceInfo.module.css";

export default function DeviceInfo({ device }) {
  const [connected, setConnected] = useState();
  const [doNotConnect, setDoNotConnect] = useState();
  const [connectionCtr, setConnectionCtr] = useState(0);
  const [connectedMsg, setConnectedMsg] = useState("Connecting...");
  const [cbn, setCbn] = useState("Not in call");
  const [platform, setPlatform] = useState();
  const [peripheral, setPeripheral] = useState();
  const [registration, setRegistration] = useState();
  const [registrationText, setRegistrationText] = useState("Please wait");

  let url = device.hostname ? device.hostname : device.ip;

  const devicesWithoutPeriphrals = ["DX70", "DX80"];

  const getPeripheralStatus = async (xapi) => {
    let arr = [];
    for (let i = 1000; i < 1100; i++) {
      try {
        if (!devicesWithoutPeriphrals.includes(platform)) {
          const peripheral = await xapi.Status.Peripherals.ConnectedDevice[
            i
          ].Type.get();
          const peripheralStatus =
            await xapi.Status.Peripherals.ConnectedDevice[i].Status.get();
          arr.push({
            type: peripheral,
            status: peripheralStatus,
          });
        }
      } catch (e) {}
    }
    setPeripheral(arr);
    console.log(arr);
  };
  const getRegistrationStatus = async (xapi) => {
    const registrationStatus = await xapi.Status.Webex.Status.get();

    switch (registrationStatus) {
      case "Disabled":
        setRegistration("#000");
        setRegistrationText(registrationStatus);
        break;
      case "Error":
        setRegistration("#d61c41");
        setRegistrationText(registrationStatus);
        break;
      case "Registered":
        setRegistration("#48cc45");
        setRegistrationText(registrationStatus);
        break;
      case "Registering":
        setRegistration("#dce319");
        setRegistrationText(registrationStatus);
        break;
      case "Stopped":
        setRegistration("#d61c41");
        setRegistrationText(registrationStatus);
        break;
    }
  };
  const connectToDevice = () => {
    jsxapi
      .connect({
        host: device.hostname || device.ip,
        protocol: "ws:",
        username: device.username,
        password: device.password,
      })
      .on("error", () => {
        setConnectionCtr((prevState) => prevState + 1);
        setRegistrationText("Error Connecting");
        if (connectionCtr > 0) {
          setDoNotConnect(true);
          return;
        }
        setConnected(false);
        setConnectedMsg("Failed to connect");
      })
      .on("ready", async (xapi) => {
        setConnected(true);
        setConnectedMsg("Connected");

        const call = await xapi.Status.Call.get();
        if (call.length > 0) {
          const callId = call[0].CallbackNumber.substring(
            call[0].CallbackNumber.indexOf(":") + 1
          );
          setCbn(callId);
        }

        xapi.Event.CallSuccessful.on(async () => {
          const call = await xapi.Status.Call.get();
          const callId = call[0].CallbackNumber.substring(
            call[0].CallbackNumber.indexOf(":") + 1
          );
          setCbn(callId);
        });

        xapi.Event.CallDisconnect.on(() => {
          setCbn("Not in call");
        });

        const getPlatform = await xapi.Status.SystemUnit.ProductPlatform.get();
        setPlatform(getPlatform);

        getPeripheralStatus(xapi);

        getRegistrationStatus(xapi);
      });
  };

  useEffect(() => {
    if (connected || doNotConnect) {
      return;
    }
    const interval = setInterval(() => {
      connectToDevice();
    }, 3000);
    return () => clearInterval(interval);
  }, [connected, doNotConnect]);

  return (
    <>
      <div
        className={styles.connected}
        style={{ backgroundColor: registration }}
      >
        <span className={styles.connectedtooltip}>{registrationText}</span>
      </div>
      <div className={styles.item}>
        <h2 className={styles.cardTitle}>
          <a className={styles.a} href={`https://${url}/`} target="_blank">
            {device.hostname || device.ip}
          </a>
        </h2>
        <div className={styles.p}>{platform}</div>
        <div className={styles.p}>Device Status: {connectedMsg}</div>
        {connected && <div className={styles.p}>Call Status: {cbn}</div>}
        {platform && !registrationText == 'Error Connecting' && !devicesWithoutPeriphrals.includes(platform) ? (
          <>
            {peripheral.map((per) => {
              if (per.type == "TouchPanel") {
                return (
                  <div key={per.type}>
                    <div className={styles.p}>Peripheral: {per.type}</div>
                    <div className={styles.p}>
                      Peripheral Status: {per.status}
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </>
        ) : null}
      </div>
    </>
  );
}
