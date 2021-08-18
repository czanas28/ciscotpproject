const { db } = require('./db');

module.exports = {
  async createNewDevice (req, res) {
    const deviceCollection = await db();
  
    const data = req.body.device;
  
    let response, deviceHostname, deviceIp;
  
    const deviceCheckHostname = deviceCollection.find({
      hostname: data.hostname,
    });
  
    const deviceCheckIp = deviceCollection.find({
      ip: data.ip,
    });
  
    await deviceCheckHostname.forEach((dev) => {
      deviceHostname = dev;
    });
  
    await deviceCheckIp.forEach((dev) => {
      deviceIp = dev;
    });
  
    if (!deviceHostname || !deviceIp) {
      await deviceCollection.insertOne(data);
      response = "The device has been added.";
      res.status(201).send({ message: response });
    } else {
      response = "The device already exists.";
      res.status(201).send({ message: response });
    }
  }
}