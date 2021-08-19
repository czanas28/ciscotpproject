const { MongoClient } = require("mongodb");

module.exports = {
  async db() {
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.j1uqx.mongodb.net/deviceDb?retryWrites=true&w=majority`;

    const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
    const db = client.db();
    const deviceCollection = db.collection("devices");

    return deviceCollection;
  },
};
