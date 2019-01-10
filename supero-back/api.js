require("dotenv").config();
const express = require("express");
const app = express();
const port = 3001;
const index = require("./index");

const cors = require("cors");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(cors());

app.use("/api", index);

app.listen(port, err => {
  if (err) {
    throw new Error("Something bad happened ...");
  }
  console.log(`Server listened on ${port}`);
});