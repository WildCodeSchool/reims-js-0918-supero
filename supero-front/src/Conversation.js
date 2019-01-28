import React from "react";
import { Button } from "reactstrap";
import formatDate from "./formatDate";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Conversation.css";

import {
  faRunning,
  faBicycle,
  faSwimmer
} from "@fortawesome/free-solid-svg-icons";

library.add(faRunning, faBicycle, faSwimmer);

const Conversation = props => {
  return (
    <div className="conversation">
      <p>
        <FontAwesomeIcon
          className="mr-1"
          style={{ minWidth: "20px" }}
          icon={`${
            props.sport_name === "velo"
              ? "bicycle"
              : props.sport_name === "natation"
              ? "swimmer"
              : props.sport_name === "musculation"
              ? "dumbbell"
              : props.sport_name === "running"
              ? "running"
              : props.sport_name === "exterieur"
              ? "cloud-sun"
              : "city"
          }`}
        />
        <span style={{ fontWeight: 300 }}>
          {formatDate(props.activity_start_time)}
        </span>{" "}
        - {props.activity_title}
      </p>
      <Button>Go</Button>
    </div>
  );
};

export default Conversation;
