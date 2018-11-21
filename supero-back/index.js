const port = 3000;
const express = require("express");
const app = express();
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
  });

app.listen(port, err => {
  if (err) {
    throw new Error("Something Bad Happened ...");
  }
  console.log(`server is listening on ${port}`);
});
