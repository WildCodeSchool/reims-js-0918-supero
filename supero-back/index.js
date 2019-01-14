require("dotenv").config();
const express = require("express");
const passport = require("passport");
const http = require("http");

require("./passport-strategy");
const auth = require("./auth");
const cors = require("cors");
const bcrypt = require("bcrypt");
const port = 3001;
const app = express();
const connection = require("./conf");
const SocketIO = require("socket.io");
//require("socketio");
const server = http.createServer(app);
const io = SocketIO(server);
const fs = require("fs");
const multer = require("multer");
const upload = multer({
  dest: "tmp/",
  fileFilter: function(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error("Only image files are allowed!"));
    }
    cb(null, true);
  },
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
            const activityDetail = result[0];
            connection.query(
              `SELECT COUNT(id) AS nb_participants
            FROM user_has_activities WHERE activity_id = ${activityId}`,
              (err, result) => {
                if (err) {
                  console.log(err);
                  res.status(500).send(err);
                } else {
                  res.status(200).json({
                    result: {
                      nb_participants: result[0].nb_participants,
                      ...activityDetail
                    }
                  });
                }
              }
            );
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
            res.status(200).json({
              message: "Nouvelle activité créée",
              activityId: results.insertId
            });
          }
        }
      );
    }
  )

  .delete(
    "/activity/:activity_id/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      const activityId = req.params.activity_id;
      connection.query(
        "DELETE FROM activities WHERE activity_id =  ?",
        activityId,
        (err, results) => {
          if (err) {
            console.log(err);
            res.status(500).json({ message: "Erreur lors de la suppression" });
          } else {
            res.status(200).json({ message: "Activité supprimée" });
          }
        }
      );
    }
  )
  // S'inscrire à une activité
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
  // Se désinscrire
  .post(
    "/unsubscribe",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      const user_id = req.user.id;
      const activity_id = req.body.activity_id;
      connection.query(
        `DELETE FROM user_has_activities WHERE user_id = ${user_id} AND activity_id = ${activity_id}`,
        (err, results) => {
          if (err) {
            console.log(err);
            res
              .status(500)
              .json({ message: "Erreur lors de la désinscription" });
          } else {
            res.status(200).json({ message: "Vous êtes bien désinscrit" });
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

//USERS -- Récupérer les activités de l'utilisateur connecté
app.get(
  "/userActivities",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let idUser = req.user.id;
    req.query.userId !== undefined && (idUser = req.query.userId);
    connection.query(
      `SELECT activities.activity_id,activity_difficulty,activity_city,user_pseudo,creator_id,activity_start_time, activity_title,sport_name FROM user_has_activities JOIN activities ON activities.activity_id = user_has_activities.activity_id JOIN users ON users.user_id = user_has_activities.user_id JOIN sports ON activities.sport_id = sports.sport_id WHERE user_has_activities.user_id = ?`,
      [idUser],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        } else {
          const participation = result;
          connection.query(
            `SELECT activities.activity_id,creator_id,activity_start_time, activity_title,sport_name FROM activities JOIN users ON users.user_id = activities.creator_id JOIN sports ON activities.sport_id = sports.sport_id WHERE creator_id = ?`,
            [idUser],
            (err, result) => {
              res.status(200).json({ participation, created: result });
            }
          );
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
          res.status(200).json(result[0]);
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

//Chat

let room = "";
io.on("connection", socket => {
  console.log("New user connected");
  socket.on("room", data => {
    room = data.roomID;
    socket.join(room);
    console.log(`Join room - ${room}`);
  });

  //default username
  socket.username = "Anonymous";

  //listen on new_message
  socket.on("new_message", data => {
    io.sockets.in(room).emit("new_message", {
      message: data.message,
      username: data.username,
      user_id: data.user_id,
      user_photo: data.user_photo
    });
  });
});

//Poster un message
app.post(
  "/messages",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const formData = req.body;
    connection.query("INSERT INTO messages SET ?", formData, err => {
      if (err) {
        res
          .status(500)
          .send(err)
          .json({
            toastType: "error",
            message: "Erreur lors du post d'un message"
          });
      } else {
        res.status(200).json({ message: "Message envoyé" });
      }
    });
  }
);

//Récupérer les messages

app.get(
  "/messages/:activity_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const activity_id = req.params.activity_id;
    connection.query(
      `SELECT message,user_pseudo,user_photo,messages.user_id FROM messages JOIN users ON messages.user_id = users.user_id JOIN activities ON activities.activity_id = messages.activity_id WHERE messages.activity_id = ?`,
      [activity_id],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        } else {
          const messages = result;
          connection.query(
            `SELECT activity_title,activity_start_time FROM activities WHERE activity_id = ?`,
            [activity_id],
            (err, activity) => {
              if (err) {
                console.log(err);
                res.status(500).send(err);
              } else {
                res.json({ messages, activity: activity[0] });
              }
            }
          );
        }
      }
    );
  }
);

// USERS -- TERMINE

server.listen(port, err => {
  if (err) {
    throw new Error("Something Bad Happened ...");
  }
  console.log(`server is listening on ${port}`);
});
