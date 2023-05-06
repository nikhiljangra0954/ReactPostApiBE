// here we will create a simple backed spi

const express = require("express");
const { connection } = require("./config/db");
const cors = require("cors");
const { postRoute } = require("./Routes/PostRoutes");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/post",postRoute)

app.get("/", (req, res) => {
  res.send("React Post application api");
});

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Listening on port 8088 connected to mongodb");
  } catch (error) {
    console.log(error);
  }
});
