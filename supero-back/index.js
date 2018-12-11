require("dotenv").config();
const port = 3001;
const express = require("express");
const app = express();
const connection = require("./conf");
const bodyParser = require("body-parser");
// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// Add headers
app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");
  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);
  // Pass to next layer of middleware
  next();
});

// IMPORT JSON
const activitiesjson = require("./activities.json");
const json = require("./users.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// ACTIVITIES
// a is alias for table activities,
// s is alias for table sports,
// u is alias for table users

const columnsRequiredForActivities = `
  a.activity_id,
  a.sport_id AS fk_sport_id,
  a.creator_id,
  s.sport_name,
  u.user_pseudo,
  a.activity_title,
  a.activity_difficulty,
  a.activity_description,
  a.activity_more_infos,
  a.activity_adresse,
  a.activity_city,
  a.activity_latitude,
  a.activity_longitude,
  a.activity_start_time,
  a.activity_duration,
  a.activity_photo,
  a.activity_max_participants,
  a.activity_creation_time`;

app
  .get("/activities", (req, res) => {
    connection.query(
      `SELECT ${columnsRequiredForActivities}
      FROM activities AS a 
      JOIN sports AS s ON a.sport_id = s.sport_id 
      JOIN users AS u ON a.creator_id = u.user_id ORDER BY activity_creation_time DESC`,
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        } else {
          res.status(200).json(result);
        }
      }
    );
  })
  .get("/activities/sports/:sports_id", (req, res) => {
    const sportId = req.params.sports_id;
    connection.query(
      `SELECT ${columnsRequiredForActivities} 
      FROM activities AS a 
      JOIN sports AS s ON a.sport_id = s.sport_id 
      JOIN users AS u ON a.creator_id = u.user_id 
      WHERE s.sport_id = ?`,
      [sportId],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        } else {
          res.status(200).json(result);
        }
      }
    );
  })
  .get("/activities/creators/:creator_id", (req, res) => {
    const creatorId = req.params.creator_id;
    connection.query(
      `SELECT ${columnsRequiredForActivities} 
      FROM activities AS a 
      JOIN sports AS s ON a.sport_id = s.sport_id 
      JOIN users AS u ON a.creator_id = u.user_id 
      WHERE creator_id = ?`,
      [creatorId],
      (err, results) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        } else {
          res.json(results);
        }
      }
    );
  })
  .get("/activities/city/:city", (req, res) => {
    const city = req.params.city;
    connection.query(
      `SELECT ${columnsRequiredForActivities} 
      FROM activities AS a 
      JOIN sports AS s ON a.sport_id = s.sport_id 
      JOIN users AS u ON a.creator_id = u.user_id 
      WHERE activity_city = ?`,
      [city],
      (err, results) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        } else {
          res.json(results);
        }
      }
    );
  })
  .get("/activities/geolocalisation", (req, res) => {
    const latitude = req.query.latitude;
    const longitude = req.query.longitude;
    connection.query(
      `SELECT ${columnsRequiredForActivities} 
      FROM activities AS a 
      JOIN sports AS s ON a.sport_id = s.sport_id 
      JOIN users AS u ON a.creator_id = u.user_id 
      WHERE activity_latitude = ? AND activity_longitude = ?`,
      [latitude, longitude],
      (err, results) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        } else {
          res.json(results);
        }
      }
    );
  })

  .post("/activities", (req, res) => {
    const formData = req.body;
    connection.query(
      "INSERT INTO activities SET ?",
      formData,
      (err, results) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        } else {
          res.sendStatus(200);
        }
      }
    );
  })
  .put("/activities/:activity_id", (req, res) => {
    const idActivity = req.params.activity_id;
    const formData = req.body;
    connection.query(
      "UPDATE activities SET ? WHERE id = ?",
      [formData, idActivity],
      err => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        } else {
          res.sendStatus(200);
        }
      }
    );
  });

// USERS -- Liste utilisateurs

app.get("/users", (req, res) => {
  res.send(json.users);
});

// USERS -- créer un utilisateur

app.post("/users", (req, res) => {
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

app.get("/users/:user_id", (req, res) => {
  const idUser = req.params.user_id;
  connection.query(
    `SELECT * FROM users WHERE user_id = ?`,
    [idUser],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.status(200).json(result);
      }
    }
  );
});

// USERS -- modifier le profil d'un utilisateur

app.put("/users/:id", (req, res) => {
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
