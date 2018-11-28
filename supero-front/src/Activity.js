import React from "react";
import PropTypes from "prop-types";
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

const sports = ["Running", "Vélo", "Football", "Sport Ext.", "Sport Int."];

const Activity = activity => {
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
            <h2> Session {sports[activity.activity_id - 1]}</h2>
          </CardTitle>
          <CardBody>
            <span class="difficulty">
              {displayDifficultyIcon(activity.difficulty).map(icon => icon)}
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

Activity.propTypes = {
  sports: PropTypes.string.isRequired,
  difficulty: PropTypes.number.isRequired,
  start_time: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  creator_id: PropTypes.number.isRequired
};

export default Activity;
