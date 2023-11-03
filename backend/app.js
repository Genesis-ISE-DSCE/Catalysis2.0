const express = require("express");
const app = express();
require("dotenv").config();
require("express-async-errors");
const connectDB = require("./database/connect");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Database connection established successfully...");
    app.listen(port, console.log(`Server started on port ${port}...`));
  } catch (err) {
    console.log(err);
  }
};

startServer();