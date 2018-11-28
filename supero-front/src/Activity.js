import React from "react";
import PropTypes from "prop-types";
import "./Activity.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardTitle, CardBody, CardImg, CardImgOverlay } from "reactstrap";
import DisplayDifficultyIcon from "./DisplayDifficultyIcon";

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
    <div className="activity-container">
      <Card className="activity" inverse>
        {props.activity_img ? (
          <CardImg
            width="100%"
            src={`./images/${props.activity_img}`}
            alt={props.sports_id}
          />
        ) : (
          <CardImg width="100%" src="./images/default.jpg" alt="default" />
        )}
        <CardImgOverlay>
          <CardTitle>Session {sports[props.sports_id - 1]}</CardTitle>
          <CardBody>
            <span className="difficulty">
              <DisplayDifficultyIcon difficulty={props.difficulty} />
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

Activity.propTypes = {
  sports_id: PropTypes.number.isRequired,
  difficulty: PropTypes.number.isRequired,
  start_time: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  creator_id: PropTypes.number.isRequired
};

export default Activity;
