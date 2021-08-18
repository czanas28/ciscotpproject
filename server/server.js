require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();

const { createNewDevice } = require("./functions/createNewDevice");
const { getAllDevices } = require("./functions/getAllDevices");
const { connect } = require('./functions/jsxapiConnection');

let deviceArray;

getAllDevices()
  .then((res) => {
    deviceArray = res;
  })
  .then(() => {
    connect(deviceArray)
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../my-app/out")));

app.get("/api/devices", async (req, res) => {
  res.status(200).send(deviceArray);
});

app.post("/api/devices", async (req, res) => {
  await createNewDevice(req, res);
  getAllDevices().then((res) => {
    deviceArray = res;
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../ciscotpnext/out/index.html"));
});

app.listen(process.env.PORT || 3080, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
