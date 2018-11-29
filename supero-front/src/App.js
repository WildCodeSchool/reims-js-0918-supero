import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import ActivitiesList from "./ActivitiesList";

const activities = [
  {
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
    creation_time: "01/12/18",
    activity_img: "running.jpg"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { activities, activitiesList: [] };
  }
  componentDidMount() {
    axios.get(`http://localhost:3001/activities`).then(res => {
      this.setState({ activitiesList: res.data });
      console.log(this.state.activitiesList);
    });
  }
  render() {
    return (
      <div>
        {this.state.activitiesList.length > 0 && (
          <ActivitiesList activities={this.state.activitiesList} />
        )}
      </div>
    );
  }
}

export default App;
