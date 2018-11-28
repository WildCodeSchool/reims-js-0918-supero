import React from "react";
import displayDifficultyIcon from "./displayDifficultyIcon";

const sports = ["Running", "Vélo", "Football", "Sport Ext.", "Sport Int."];

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

displayDifficultyIcon(2);

const Activity = activity => {
  return (
    <div class="activity">
      <h2> Session {sports[activity.activity_id - 1]}</h2>
      <span />
    </div>
  );
};

export default Activity;
