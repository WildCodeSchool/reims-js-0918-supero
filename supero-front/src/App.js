import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "./logo.svg";
import "./App.css";
import Activity from "./Activity";

const activity = {
  activity_id: 1,
  sports_id: 1,
  creator_id: 1,
  difficulty: 3,
  activity_description: "Yolo",
  adresse: "31 rue de lorem ipsum",
  city: "lorem ipsum",
  latitude: "35.123.78",
  longitude: "654151651",
  start_time: "05/12/18",
  duration: 2,
  photo: "image.png",
  max_participants: 5,
  creation_time: "01/12/18"
};

class App extends Component {
  render() {
    return <Activity activity={activity} />;
  }
}

export default App;
