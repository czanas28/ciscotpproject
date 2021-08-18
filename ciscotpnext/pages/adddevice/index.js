import { useEffect, useState } from "react";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";

import axios from "axios";

import styles from "../../styles/Device.module.css";

export default function NewDevice(props) {
  const [submitting, setSubmitting] = useState();
  const [customUI, setCustomUI] = useState();

  const [formState, setFormState] = useState({
    hostname: "",
    ip: "",
    username: "",
    password: "",
    customUi: {
      hasCustomUi: false,
      customUiFile: "",
    },
    associatedAccounts: {
      cms: [],
      webex: [],
      zoom: [],
    },
    features: {
      muteOnCallStart: false,
    },
  });

  const handleChange = (e) => {
    if (e.target.name === "customUi") {
      if (customUI) {
        setCustomUI(false);
        setFormState({
          ...formState,
          [e.target.name]: {
            hasCustomUi: false,
            customUiFile: formState.customUi.customUiFile,
          },
        });
      } else {
        setCustomUI(true);
        setFormState({
          ...formState,
          [e.target.name]: {
            hasCustomUi: true,
            customUiFile: formState.customUi.customUiFile,
          },
        });
      }
    } else {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleCustomUiFileUpload = (e) => {
    console.log(e);
    setFormState({
      ...formState,
      customUi: {
        hasCustomUi: formState.customUi.hasCustomUi,
        [e.target.name]: e.target.files[0],
      },
    });
  };

  const handleAssociatedAccounts = (e) => {
    let accounts = e.target.value;
    const arr = accounts.split(",");
    const emailAccounts = arr.map((account) => {
      return account.replace(/\s+/g, "").trim();
    });

    setFormState({
      ...formState,
      associatedAccounts: {
        ...formState.associatedAccounts,
        [e.target.name]: emailAccounts,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);

    const formSubmission = await axios.post("/api/devices", {
      device: formState,
    });

    console.log(formSubmission.data.message);

    setTimeout(() => {
      setFormState({
        hostname: "",
        ip: "",
        username: "",
        password: "",
        customUi: {
          hasCustomUi: false,
          customUiFile: "",
        },
        associatedAccounts: {
          cms: [],
          webex: [],
          zoom: [],
        },
        features: {
          muteOnCallStart: false,
        },
      });
    }, 2000);

    setSubmitting(false);
  };

  return (
    <div className={styles.asideContainer}>
      <div className={styles.aside}>
        <form onSubmit={handleSubmit} className={styles.deviceForm}>
          <div></div>
          <div style={{ margin: "10px auto" }}>Connection Information</div>
          <Input
            type="text"
            label="Hostname"
            name="hostname"
            onChange={handleChange}
            value={formState.hostname}
            placeholder="Enter the Hostname/FQDN"
            styleinput={styles.input}
            stylelabel={styles.label}
            hidden={formState.ip ? true : false}
            required={formState.ip ? false : true}
          />
          <Input
            type="text"
            label="IP Address"
            name="ip"
            onChange={handleChange}
            value={formState.ip}
            placeholder="Enter the IP address"
            styleinput={styles.input}
            stylelabel={styles.label}
            hidden={formState.hostname ? true : false}
            required={formState.hostname ? false : true}
          />
          <Input
            type="text"
            label="Username"
            name="username"
            onChange={handleChange}
            value={formState.username}
            placeholder="Enter the Username"
            styleinput={styles.input}
            stylelabel={styles.label}
            required
          />
          <Input
            type="text"
            label="Password"
            name="password"
            value={formState.password}
            onChange={handleChange}
            placeholder="Enter the Password"
            styleinput={styles.input}
            stylelabel={styles.label}
            required
          />
          <div></div>
          <div style={{ margin: "10px auto" }}>Associated Accounts</div>
          <Input
            type="text"
            name="cms"
            label="CMS Accounts"
            value={formState.associatedAccounts.cms}
            onChange={handleAssociatedAccounts}
            placeholder="Enter the associated email addresses, seperated by a comma"
            styleinput={styles.input}
            stylelabel={styles.label}
          />
          <Input
            type="text"
            name="webex"
            label="Webex Accounts"
            value={formState.associatedAccounts.webex}
            onChange={handleAssociatedAccounts}
            placeholder="Enter the associated email addresses, seperated by a comma"
            styleinput={styles.input}
            stylelabel={styles.label}
          />
          <Input
            type="text"
            name="zoom"
            label="Zoom Accounts"
            value={formState.associatedAccounts.zoom}
            onChange={handleAssociatedAccounts}
            placeholder="Enter the associated email addresses, seperated by a comma"
            styleinput={styles.input}
            stylelabel={styles.label}
          />
          <div></div>
          <div style={{ margin: "10px auto" }}>Custom User Interface</div>
          <Input
            type="checkbox"
            label="Custom UI"
            name="customUi"
            value={customUI}
            onChange={handleChange}
            styleinput={styles.input}
            stylelabel={styles.label}
          />
          {customUI ? (
            <Input
              type="file"
              label="Choose a File"
              name="customUiFile"
              onChange={handleCustomUiFileUpload}
              styleinput={styles.input}
              stylelabel={styles.label}
            />
          ) : null}
          <div></div>
          <div style={{ margin: "10px auto" }}>Features</div>
          <Button
            style={styles.submitBtn}
            label="Submit"
            value="submit"
            disabled={submitting ? false : true}
          />
        </form>
      </div>
    </div>
  );
}
