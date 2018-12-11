import React from "react";
import DisplayDifficultyIcon from "./DisplayDifficultyIcon";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Media } from "reactstrap";
import "./ActivityDetail.css";
import Header from "./Header";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

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
  latitude: "49.263396",
  longitude: "4.019872",
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
const position = [activity.latitude, activity.longitude];
const latlngValue = {
  latlng: {
    lat: activity.latitude,
    lng: activity.longitude
  }
};
console.log(latlngValue.latlng);

const ActivityDetail = () => (
  <div className="activity_profile">
    <Header title="Détail" />
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
    <Map
      style={{ height: "250px", marginTop: "15px" }}
      center={latlngValue.latlng}
      length={4}
      zoom={13}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Votre activité. <br /> Easily customizable.
        </Popup>
      </Marker>
    </Map>
  </div>
);
export default ActivityDetail;
