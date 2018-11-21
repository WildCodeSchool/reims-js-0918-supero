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

// USERS -- afficher le profil d'un utilisateur

app.get("/api/users/:user_id", (req, res) => {
  const requiredProfile = json.users.filter(
    user => user.id === parseInt(req.params.user_id)
  );
  requiredProfile[0]
    ? res.send(`Your id : ${requiredProfile[0].firstname}`)
    : res.status(404).send(`There is no such user !`);
});

app.listen(port, err => {
  if (err) {
    throw new Error("Something Bad Happened ...");
  }
  console.log(`server is listening on ${port}`);
});
