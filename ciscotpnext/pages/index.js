import { useState, useEffect } from "react";
import axios from "axios";

import Navigation from "../components/Navigation";
import Card from "../components/Card";
import DeviceInfo from "../components/DeviceInfo";
import styles from "../styles/NewStart.module.css";

export default function NewStart() {
  const [devices, setDevices] = useState();
  const [selectedDevice, setSelectedDevice] = useState();

  const fetchDevices = async () => {
    const deviceArray = await axios.get("/api/devices/");
    setDevices(deviceArray.data);
  };

  useEffect(() => {
    fetchDevices();
  }, []);

  const handleSelectDevice = (device) => {
    setSelectedDevice(device);
  };

  return (
    <>
    <main className={styles.container}>
        <Navigation />      
        <div className={styles.app}>
          {devices &&
            devices.map((device) => {
              return (
                <Card
                  key={device._id}
                  onClick={() => handleSelectDevice(device)}
                >
                  <DeviceInfo className={styles.item} device={device} />
                </Card>
              );
            })}
        </div>
      </main>
    </>
  );
}
