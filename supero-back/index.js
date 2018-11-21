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
  .get("/activities/:sports_id", (req, res) => {
    const sportId = req.params.sports_id;
    const result = activitiesjson.activities.filter(
      activity => activity.sports_id.toString() === sportId
    );
    res.send(result);
  });

app.listen(port, err => {
  if (err) {
    throw new Error("Something Bad Happened ...");
  }
  console.log(`server is listening on ${port}`);
});
