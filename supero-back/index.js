require("dotenv").config();
const express = require("express");
const passport = require("passport");

require("./passport-strategy");
const auth = require("./auth");
const cors = require("cors");
const bcrypt = require("bcrypt");
const port = 3001;

const app = express();
const connection = require("./conf");

const fs = require("fs");
const multer = require("multer");
const upload = multer({
  dest: "tmp/",
  // fileFilter: function(req, file, cb) {
  //   if (file.mimetype !== "image/png" || file.mimetype !== "image/jpeg") {
  //     return cb(null, false);
  //   } else {
  //     cb(null, true);
  //   }
  // },
  limits: {
    fileSize: 3 * 1024 * 1024
  }
});
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(express.static("public"));
app.use("/auth", auth);
app.use(cors());

app.get(
  "/test",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.send(
      `authorized for user req.user.usernamewithid{req.user.username} with id req.user.usernamewithid{req.user.id}`
    );
  }
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
  .get(
    "/activities",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      const limit = 5;
      const offset = (req.query.page - 1) * limit;
      const order = req.query.order;
      const ascDesc = order === "activity_start_time" ? "ASC" : "DESC";
      connection.query(
        `SELECT COUNT(activity_id) AS activitiesTotal FROM activities`,
        (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).send(err);
          } else {
            const activitiesTotal = result[0].activitiesTotal;
            connection.query(
              `SELECT ${columnsRequiredForActivities}
      FROM activities AS a 
      JOIN sports AS s ON a.sport_id = s.sport_id 
      JOIN users AS u ON a.creator_id = u.user_id ORDER BY ${order} ${ascDesc} LIMIT ${limit} OFFSET ${offset}`,
              (err, result) => {
                if (err) {
                  console.log(err);
                  res.status(500).send(err);
                } else {
                  res.status(200).json({ activities: result, activitiesTotal });
                }
              }
            );
          }
        }
      );
    }
  )

  .get(
    "/search/:request",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      const request = req.params.request;
      const order = req.query.order;
      const ascDesc = order === "activity_start_time" ? "ASC" : "DESC";
      connection.query(
        `SELECT ${columnsRequiredForActivities}, COUNT(activity_id) AS activitiesTotal
      FROM activities AS a 
      JOIN sports AS s ON a.sport_id = s.sport_id 
      JOIN users AS u ON a.creator_id = u.user_id WHERE activity_title LIKE "%${request}%" OR sport_name LIKE "%${request}%" OR activity_city LIKE "%${request}%" GROUP BY activity_id ORDER BY ${order} ${ascDesc}`,
        (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).send(err);
          } else {
            res.status(200).json({
              activities: result,
              activitiesTotal: result.activitiesTotal
            });
          }
        }
      );
    }
  )

  .get(
    "/activities/:activity_id",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      const activityId = req.params.activity_id;
      connection.query(
        `SELECT ${columnsRequiredForActivities}
      FROM activities AS a 
      JOIN sports AS s ON a.sport_id = s.sport_id 
      JOIN users AS u ON a.creator_id = u.user_id WHERE activity_id = ${activityId}`,
        (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).send(err);
          } else {
            res.status(200).json(result);
          }
        }
      );
    }
  )
  .get(
    "/activities/sports/:sports_id",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
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
    }
  )
  .get(
    "/activities/creators/:creator_id",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
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
    }
  )
  .get(
    "/activities/city/:city",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
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
    }
  )
  .get(
    "/activities/geolocalisation",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
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
    }
  )

  .post(
    "/activities",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      req.body = Object.assign({ creator_id: req.user.id }, req.body);
      const formData = req.body;

      connection.query(
        "INSERT INTO activities SET ?",
        formData,
        (err, results) => {
          if (err) {
            console.log(err);
            res
              .status(500)
              .json({ message: "Erreur lors de la création de l'activité" });
          } else {
            res.status(200).json({ message: "Nouvelle activité créée" });
          }
        }
      );
    }
  )
  .post(
    "/subscribe",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      req.body = Object.assign(
        {
          user_id: req.user.id
        },
        req.body
      );
      const formData = req.body;
      connection.query(
        "INSERT INTO user_has_activities SET ?",
        formData,
        (err, results) => {
          if (err) {
            console.log(err);
            res.status(500).json({ message: "Erreur lors de l'inscription" });
          } else {
            res.status(200).json({ message: "Vous êtes bien inscrit" });
          }
        }
      );
    }
  )
  .put(
    "/activities/:activity_id",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
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
    }
  );

// USERS -- Liste utilisateurs

app.get(
  "/users",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    connection.query(`SELECT * FROM users`, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.status(200).json(result);
      }
    });
  }
);

// USERS -- créer un utilisateur

app.post("/users", (req, res) => {
  const formData = req.body;
  formData.user_password = bcrypt.hashSync(formData.user_password, 10);
  connection.query("INSERT INTO users SET ?", formData, err => {
    if (err) {
      res
        .status(500)
        .send(err)
        .json({
          toastType: "error",
          message: "Erreur lors de la création d'un utilisateur"
        });
    } else {
      res.status(200).json({ message: "Creation d'un nouvel utilisateur" });
    }
  });
});

// USERS -- afficher le profil d'un utilisateur

app.get(
  "/users/:user_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
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
  }
);

// USERS -- afficher l'utilisateur connecté

app.get(
  "/connecteduser",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const idUser = req.user.id;
    connection.query(
      `SELECT * FROM users WHERE user_id = ${idUser}`,
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
  }
);

// USERS -- modifier le profil d'un utilisateur

app.put(
  "/users/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const idUser = req.params.id;
    const formData = req.body;
    connection.query(
      "UPDATE users SET ? WHERE id = ?",
      [formData, idUser],
      err => {
        if (err) {
          console.log(err);
          res
            .status(500)
            .send("Erreur lors de la modification d'un utilisateur");
        } else {
          res.sendStatus(200);
        }
      }
    );
  }
);

// USER -- AJOUT AVATAR
app.post("/avatar/:email", upload.single("avatar"), function(req, res, next) {
  const emailUser = req.params.email;
  const fileName = req.file.originalname;
  console.log(req.file.originalname);
  fs.rename(req.file.path, "public/images/" + req.file.originalname, function(
    err
  ) {
    if (err) {
      res.send("problème durant le déplacement");
    } else {
      connection.query(
        `UPDATE users SET user_photo = ? WHERE user_email = ?`,
        [fileName, emailUser],
        err => {
          if (err) {
            console.log(err);
            res.status(500).json({ toastType: "error" });
          } else {
            res
              .status(200)
              .json({ toastType: "success", message: "Avatar modifié" });
          }
        }
      );
    }
  });
});

// USERS -- TERMINE

app.listen(port, err => {
  if (err) {
    throw new Error("Something Bad Happened ...");
  }
  console.log(`server is listening on ${port}`);
});
