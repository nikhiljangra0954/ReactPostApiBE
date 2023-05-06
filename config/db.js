// here we will make connection to connect with mongodb atlas
const mongoose = require("mongoose");
require("dotenv").config();
const connection = mongoose.connect(process.env.mongourl);

module.exports = {
  connection,
};
