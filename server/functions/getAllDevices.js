const { db } = require("./db");

module.exports = {
  async getAllDevices() {
    const deviceCollection = await db();
    const allDevices = deviceCollection.find();

    let arr = [];
    await allDevices.forEach((dev) => {
      arr.push(dev);
    });
    return arr;
  },
};
