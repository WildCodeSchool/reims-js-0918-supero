import React, { Component } from "react";
import "./App.css";
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
    creation_time: "01/12/18"
  },
  {
    activity_id: 2,
    sports_id: 1,
    creator_id: 1,
    difficulty: 5,
    activity_description: "Yolo",
    adresse: "31 rue de lorem ipsum",
    city: "lorem ipsum",
    latitude: "35.123.78",
    longitude: "654151651",
    start_time: "10/12/18",
    duration: 2,
    photo: "image.png",
    max_participants: 10,
    creation_time: "05/12/18"
  },
  {
    activity_id: 3,
    sports_id: 2,
    creator_id: 2,
    difficulty: 2,
    activity_description: "ok",
    adresse: "35 rue de lorem ipsum",
    city: "lorem ipsum",
    latitude: "388.123.78",
    longitude: "654.151.651",
    start_time: "09/11/18",
    duration: 6,
    photo: "image.png",
    max_participants: 2,
    creation_time: "01/11/18"
  },
  {
    activity_id: 4,
    sports_id: 3,
    creator_id: 3,
    difficulty: 1,
    activity_description: "Yolo",
    adresse: "22 rue de lorem ipsum",
    city: "lorem ipsum",
    latitude: "35.123.78",
    longitude: "65415.1651",
    start_time: "31/12/18",
    duration: 2,
    photo: "image.png",
    max_participants: 4,
    creation_time: "15/12/18"
  },
  {
    activity_id: 5,
    sports_id: 3,
    creator_id: 3,
    difficulty: 2,
    activity_description: "Yolo",
    adresse: "10 rue de lorem ipsum",
    city: "lorem ipsum",
    latitude: "35.123.78",
    longitude: "65415.1651",
    start_time: "11/01/19",
    duration: 10,
    photo: "image.png",
    max_participants: 8,
    creation_time: "31/12/18"
  },
  {
    activity_id: 6,
    sports_id: 3,
    creator_id: 3,
    difficulty: 3,
    activity_description: "Yolo",
    adresse: "14 rue de lorem ipsum",
    city: "lorem ipsum",
    latitude: "35.123.78",
    longitude: "65415.1651",
    start_time: "05/12/18",
    duration: 2,
    photo: "image.png",
    max_participants: 6,
    creation_time: "01/12/18"
  },
  {
    activity_id: 7,
    sports_id: 4,
    creator_id: 4,
    difficulty: 5,
    activity_description: "Yolo",
    adresse: "01 rue de lorem ipsum",
    city: "lorem ipsum",
    latitude: "35.123.78",
    longitude: "65415.1651",
    start_time: "08/12/18",
    duration: 2,
    photo: "image.png",
    max_participants: 8,
    creation_time: "02/12/18"
  },
  {
    activity_id: 8,
    sports_id: 5,
    creator_id: 4,
    difficulty: 2,
    activity_description: "Yolo",
    adresse: "02 rue de lorem ipsum",
    city: "lorem ipsum",
    latitude: "35.123.78",
    longitude: "65415.1651",
    start_time: "06/12/18",
    duration: 2,
    photo: "image.png",
    max_participants: 3,
    creation_time: "02/12/18"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { activities };
  }
  render() {
    return (
      <div>
        <h1>Test</h1>
        <ActivitiesList activities={this.state.activities} />
      </div>
    );
  }
}

export default App;
