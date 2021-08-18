const axios = require("axios");
const jwt = require("jsonwebtoken");
const { variables } = require("../maps/variables");

//Creates a JWT for Zoom API requests
const payload = {
  iss: process.env.ZOOM_API_KEY,
  exp: new Date().getTime() + 5000,
};
const token = jwt.sign(payload, process.env.ZOOM_API_SECRET);

//Creates the Zoom API module
const zoom = axios.create({
  baseURL: process.env.ZOOM_URL,
  headers: {
    Authorization: `Bearer ${token}`,
    "User-Agent": "Zoom-api-Jwt-Request",
    "content-type": "application/json",
  },
});

module.exports = {
  name: "zoom",
  desc: "Connects to the Zoom API",
  async execute(hostname, widgetId) {
    const res = await zoom.get(`meetings/${widgetId}`);
  },
  async listenToCalls(callId, hostname) {
    //Uses the meeting ID to query additional details
    const res = await zoom.get(`meetings/${callId}`);
  },
};
