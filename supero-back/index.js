const port = 3000;
const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
// IMPORT JSON
const activitiesjson = require("./activities.json");
const json = require("./users.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// ACTIVITIES

app
  .get("/activities", (req, res) => {
    res.send(activitiesjson);
  })
  .get("/activities/sports/:sports_id", (req, res) => {
    const sportId = req.params.sports_id;
    const result = activitiesjson.activities.filter(
      activity => activity.sports_id.toString() === sportId
    );
    res.send(result);
  })
  .get("/activities/creators/:creator_id", (req, res) => {
    const creatorId = req.params.creator_id;
    const result = activitiesjson.activities.filter(
      activity => activity.creator_id.toString() === creatorId
    );
    res.send(result);
  })
  .get("/activities/city/:city", (req, res) => {
    const city = req.params.city;
    const result = activitiesjson.activities.filter(
      activity => activity.city === city
    );
    res.send(result);
  })
  .get("/activities/geocalisation", (req, res) => {
    const latitude = req.query.latitude;
    const longitude = req.query.longitude;
    const result = activitiesjson.activities.filter(
      activity =>
        activity.latitude === latitude && activity.longitude === longitude
    );
    res.send(result).status(200);
  })
  .get("/activities/add", (req, res) => {
    res.send("Aller stp");
  })
  .post("/activities/add", (req, res) => {
    const formData = req.body;
    const sportId = req.body.sports_id;
    const creatorId = req.body.creator_id;
    const duration = req.body.duration;

    const newActivities = {
      sports_id: sportId,
      creator_id: creatorId,
      duration: duration
    };
    res.send(console.log(newActivities));
  })
  .put("/activities/update/:activity_id", (req, res) => {
    const formData = req.body;
    const activityId = req.params.activity_id;
    const sportId = req.body.sports_id;
    const creatorId = req.body.creator_id;
    const duration = req.body.duration;

    const result = activitiesjson.activities.filter(
      activity => activity.activity_id.toString() === activityId
    );
    console.log(result);

    const updateActivities = {
      sports_id: sportId,
      creator_id: creatorId,
      duration: duration
    };
    res.send(console.log(updateActivities));
  });
// USERS -- se connecter

app.get("/api/users", (req, res) => {
  res.send(
    `Welcome, you have logged in as : ${
      json.users[0].pseudo
    } and you are level ${json.users[0].level}.`
  );
});

// USERS -- créer un utilisateur

app.post("/api/users", (req, res) => {
  const formData = req.body;
  connection.query("INSERT INTO users SET ?", formData, err => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la création d'un utilisateur");
    } else {
      res.sendStatus(200);
    }
  });
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

// USERS -- modifier le profil d'un utilisateur

app.put("/api/users/:id", (req, res) => {
  const idUser = req.params.id;
  const formData = req.body;
  connection.query(
    "UPDATE user SET ? WHERE id = ?",
    [formData, idUser],
    err => {
      if (err) {
        console.log(err);
        res.status(500).send("Erreur lors de la modification d'un utilisateur");
      } else {
        res.sendStatus(200);
      }
    }
  );
});

// USERS -- TERMINE

app.listen(port, err => {
  if (err) {
    throw new Error("Something Bad Happened ...");
  }
  console.log(`server is listening on ${port}`);
});
