import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBolt,
  faClock,
  faMapMarkerAlt,
  faUser
} from "@fortawesome/free-solid-svg-icons";
library.add(faBolt, faClock, faMapMarkerAlt, faUser);

const sports = ["Running", "Vélo", "Football", "Sport Ext.", "Sport Int."];

const Activity = props => {
  return (
    <div className="activity">
      <h2> Session {sports[props.activity_id - 1]}</h2>
      {props.difficulty}
      {props.photo}
      <span>
        <FontAwesomeIcon icon="bolt" />
        <FontAwesomeIcon icon="bolt" />
        <FontAwesomeIcon icon="bolt" />
      </span>
      {props.max_participants}
      <div>
        <FontAwesomeIcon icon="clock" />
        {props.start_time}
        {props.duration}
        <FontAwesomeIcon icon="map-marker-alt" />
        {props.adresse}
        {props.city}

        <FontAwesomeIcon icon="user" />
        {props.creator_id}
      </div>
      <div>{props.activity_description}</div>
    </div>
  );
};

export default Activity;
