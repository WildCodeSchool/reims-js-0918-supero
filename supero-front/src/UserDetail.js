import React from "react";
import DisplayDifficultyIcon from "./DisplayDifficultyIcon";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Media } from "reactstrap";
import "./ActivityDetail.css";

import {
  faBolt,
  faClock,
  faMapMarkerAlt,
  faUser,
  faRunning,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";

library.add(faBolt, faClock, faMapMarkerAlt, faUser, faRunning, faInfoCircle);

const user = {
  user_id: 1,
  user_lastname: "Niveau",
  user_firstname: "Benoît",
  user_gender: "Homme",
  user_pseudo: "Benoit1521",
  user_birthdate: "1980-10-07",
  user_email: "zertyuio@hotmail.fr",
  user_password: "tutjyujt",
  user_photo:
    "https://kawacke.github.io/Projet-1-LeBookDesWilders/photos/Benoit300.jpg",
  user_level: "3"
};

const UserDetail = () => <div>toto</div>;
export default UserDetail;
