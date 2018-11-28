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

const Activity = activity => {
  return (
    <div className="activity-container">
      <Card className="activity" inverse>
        {activity.activity_img ? (
          <CardImg
            width="100%"
            src={`./images/${activity.activity_img}`}
            alt={activity.sports_id}
          />
        ) : (
          <CardImg width="100%" src="./images/default.jpg" alt="default" />
        )}
        <CardImgOverlay>
          <CardTitle>Session {sports[activity.sports_id - 1]}</CardTitle>
          <CardBody>
            <span className="difficulty">
              {displayDifficultyIcon(activity.difficulty).map((icon, index) => (
                <span key={index}>{icon}</span>
              ))}
            </span>
          </CardBody>
          <div className="activity_details">
            <FontAwesomeIcon className="ml-2 mr-1" icon="clock" />
            {activity.start_time}
            <FontAwesomeIcon className="ml-2 mr-1" icon="map-marker-alt" />
            {activity.city}
            <FontAwesomeIcon className="ml-2 mr-1" icon="user" />
            {activity.creator_id}
          </div>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default Activity;
