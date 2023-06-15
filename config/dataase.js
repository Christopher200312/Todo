const chris = require("mongoose");
const db = "mongodb://0.0.0.0:27017/OSASSET07DATABASE";

const database = async () => {
  try {
    const dbcon = await chris.connect(db);
    console.log(" ");
    console.log(`OSAS DATA BASE IS CONNECT TO : ${dbcon.connection.host}`);
  } catch (erroor) {
    console.log("an error occured");
  }
};

module.exports = database();
