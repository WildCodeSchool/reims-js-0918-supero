const port = 3000;
const express = require("express");
const app = express();
const json = require("./users.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// USERS -- se connecter

app.get("/api/users", (req, res) => {
  res.send(
    `Welcome, you have logged in as : ${
      json.users[0].pseudo
    } and you are level ${json.users[0].level}.`
  );
});

app.listen(port, err => {
  if (err) {
    throw new Error("Something Bad Happened ...");
  }
  console.log(`server is listening on ${port}`);
});
