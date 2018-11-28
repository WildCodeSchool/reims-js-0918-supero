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
console.log(faMapMarkerAlt);
const Activity = props => {
  return (
    <div className="activity">
      <h2> Session {sports[props.activity_id - 1]}</h2>

      <span>
        <FontAwesomeIcon icon="bolt" />
        <FontAwesomeIcon icon="bolt" />
        <FontAwesomeIcon icon="bolt" />
      </span>
      <div>
        <FontAwesomeIcon icon="clock" />
        {props.start_time}
        <FontAwesomeIcon icon="map-marker-alt" />
        {/* Piscine Talleyrand */}
        {props.adresse}
        <FontAwesomeIcon icon="user" />
        {/* Organisé par Aquaman */}
        {props.creator_id}
      </div>
    </div>
  );
};

export default Activity;
