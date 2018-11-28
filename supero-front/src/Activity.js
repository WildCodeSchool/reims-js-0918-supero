import React from "react";
import "./Activity.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardTitle, CardBody, CardImg, CardImgOverlay } from "reactstrap";
import displayDifficultyIcon from "./displayDifficultyIcon";

import {
  faBolt,
  faClock,
  faMapMarkerAlt,
  faUser
} from "@fortawesome/free-solid-svg-icons";

library.add(faBolt, faClock, faMapMarkerAlt, faUser);

displayDifficultyIcon(2);

const sports = ["Running", "Vélo", "Football", "Sport Ext.", "Sport Int."];

const Activity = props => {
  return (
    <div className="activity-container">
      <Card className="activity" inverse>
        <CardImg
          width="100%"
          src="./images/swimming.jpg"
          alt="Card image cap"
        />
        <CardImgOverlay>
          <CardTitle>
            <h2> Session {sports[props.activity_id - 1]}</h2>
          </CardTitle>
          <CardBody>
            <span class="difficulty">
              {displayDifficultyIcon(activity.difficulty).map(icon => icon)}
            </span>
          </CardBody>
          <div className="activity_details">
            <FontAwesomeIcon className="ml-2 mr-1" icon="clock" />
            {props.start_time}
            <FontAwesomeIcon className="ml-2 mr-1" icon="map-marker-alt" />
            {props.city}
            <FontAwesomeIcon className="ml-2 mr-1" icon="user" />
            {props.creator_id}
          </div>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default Activity;
