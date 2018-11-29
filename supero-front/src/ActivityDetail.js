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

const activity = {
  activity_id: 1,
  sports_id: 1,
  activity_title: "Cours Forest !",
  creator_id: 1,
  difficulty: 3,
  activity_description:
    "Bonjour à tous ! J'organise une session Trail dans les vignes autour de Reuil. Tous le monde est le bievenue pour parcourir 20km dans la bonne humeur !",
  adresse: "31 rue de lorem ipsum",
  city: "Reims",
  latitude: "35.123.78",
  longitude: "654151651",
  start_time: "05/12/18",
  duration: 2,
  photo: "image.png",
  max_participants: 5,
  creation_time: "01/12/18",
  activity_img: "running.jpg",
  activity_more_infos: "Chaussures de Trail"
};

const sports = ["Running", "Vélo", "Football", "Sport Ext.", "Sport Int."];
const difficulty = ["Facile", "Intermediaire", "Difficile", "Extrême"];

const ActivityDetail = () => (
  <div className="activity_profile">
    <div style={{ position: "relative", marginBottom: "40px" }}>
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          maxHeight: "200px"
        }}
      >
        <img
          style={{ width: "100%" }}
          src={process.env.PUBLIC_URL + "/images/running.jpg"}
          alt="sport"
          align="bottom"
        />
      </div>
      <div className="activity_profile_pastille_orange rounded-circle">
        <FontAwesomeIcon className="ml-2 mr-1" icon="running" />
      </div>
    </div>
    <div className="activity_detail">
      <div className="activity_detail_left">
        <div className="difficulty">
          <DisplayDifficultyIcon difficulty={activity.difficulty} />
        </div>
        <h2>Session {sports[activity.sports_id - 1]}</h2>
        <h3>{activity.activity_title}</h3>
      </div>
      <div className="activity_detail_right">
        <span className="activity_detail_icon">
          <FontAwesomeIcon className="ml-2 mr-1" icon="clock" />
          {activity.creation_time}
        </span>
        <span className="activity_detail_icon">
          <FontAwesomeIcon className="ml-2 mr-1" icon="map-marker-alt" />
          {activity.city}
        </span>
        <span className="activity_detail_icon">
          <FontAwesomeIcon className="ml-2 mr-1" icon="info-circle" />
          {activity.activity_more_infos}
        </span>
        <span className="activity_detail_icon">
          <FontAwesomeIcon className="ml-2 mr-1" icon="bolt" />
          Niveau {difficulty[activity.difficulty]}
        </span>
      </div>
    </div>
    <div className="activity_creator d-flex justify-content-between">
      <div className="activity_creator_left">
        <Media className="mt-1">
          <Media left middle href="#">
            <img
              className="activity_creator_photo"
              src={process.env.PUBLIC_URL + "/images/richardvirenque.jpg"}
              alt="sport"
            />
          </Media>
          <Media className="ml-2" body>
            <Media heading>Organisé par</Media>
            Mo Farah
          </Media>
        </Media>
      </div>
      <div className="activity_creator_right">
        <button className="activity_creator_button">Envoyer un message</button>
      </div>
    </div>
    <div className="activity_description">{activity.activity_description}</div>
    <span className="nb_participants">
      4/{activity.max_participants} participants
    </span>
    <button className="activity_participation_button">Participer</button>
    <iframe
      title="googlemap"
      className="mt-4"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20903.9567524646!2d3.79478039730804!3d49.08674302586148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e910e2662d0e6b%3A0x40a5fb99a3b4590!2sReuil!5e0!3m2!1sfr!2sfr!4v1543485906679"
      height="250"
      frameBorder="0"
      style={{ border: "0", width: "100%" }}
      allowFullScreen
    />
  </div>
);
export default ActivityDetail;
