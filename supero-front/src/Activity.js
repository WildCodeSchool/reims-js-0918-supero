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
const Activity = ({ activity }) => {
  return (
    <div className="activity">
      <h2> Session {sports[activity.activity_id - 1]}</h2>
      <span>
        <FontAwesomeIcon icon="bolt" />
        <FontAwesomeIcon icon="bolt" />
        <FontAwesomeIcon icon="bolt" />
      </span>
      <div>
        <FontAwesomeIcon icon="clock" />
        19/11/2018
        <FontAwesomeIcon icon="map-marker-alt" />
        Piscine Talleyrand
        <FontAwesomeIcon icon="user" />
        Organisé par Aquaman
      </div>
    </div>
  );
};

export default Activity;
