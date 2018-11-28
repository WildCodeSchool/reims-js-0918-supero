import React from "react";
import "./Activity.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardTitle, CardBody, CardImg, CardImgOverlay } from "reactstrap";

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
              <FontAwesomeIcon icon="bolt" />
              <FontAwesomeIcon icon="bolt" />
              <FontAwesomeIcon icon="bolt" />
            </span>
          </CardBody>
          <div className="activity_details">
            <FontAwesomeIcon className="ml-2 mr-1" icon="clock" />
            19/11/2018
            <FontAwesomeIcon className="ml-2 mr-1" icon="map-marker-alt" />
            Reims
            <FontAwesomeIcon className="ml-2 mr-1" icon="user" />
            Par Aquaman
          </div>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default Activity;
