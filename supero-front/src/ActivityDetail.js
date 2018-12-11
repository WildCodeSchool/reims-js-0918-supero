import React from "react";
import DisplayDifficultyIcon from "./DisplayDifficultyIcon";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Media } from "reactstrap";
import "./ActivityDetail.css";
import Header from "./Header";
import axios from "axios";
import formatDate from "./formatDate";
import { DateTime } from "luxon";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import {
  faBolt,
  faClock,
  faMapMarkerAlt,
  faUser,
  faRunning,
  faInfoCircle,
  faBicycle,
  faCalendarAlt
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faBolt,
  faClock,
  faMapMarkerAlt,
  faUser,
  faRunning,
  faBicycle,
  faInfoCircle,
  faCalendarAlt
);
const difficulty = ["Facile", "Intermediaire", "Difficile", "Extrême"];
const position = ["49", "4"];
const latlngValue = {
  latlng: {
    lat: "49",
    lng: "4"
  }
};

class ActivityDetail extends React.Component {
  state = {
    oneActivity: null
  };

  componentDidMount() {
    const activity_id = this.props.match.params.id;
    axios
      .get(`http://localhost:3001/activities/${activity_id}`)
      .then(res => this.setState({ oneActivity: res.data[0] }));
  }

  render() {
    return (
      this.state.oneActivity != null && (
        <div className="activity_profile">
          <Header title="Détail" />
          <div style={{ position: "relative", marginBottom: "40px" }}>
            <div
              style={{
                width: "100%",
                overflow: "hidden",
                maxHeight: "220px"
              }}
            >
              <img
                style={{ width: "100%" }}
                src={
                  process.env.PUBLIC_URL +
                  `/images/${this.state.oneActivity.sport_name}.jpg`
                }
                alt="sport"
                align="bottom"
              />
            </div>
            <div className="activity_profile_pastille_orange rounded-circle">
              <FontAwesomeIcon
                className="ml-2 mr-1"
                icon={`${
                  this.state.oneActivity.sport_name === "velo"
                    ? "bicycle"
                    : this.state.oneActivity.sport_name
                }`}
              />
            </div>
          </div>
          <div className="activity_detail">
            <div className="activity_detail_left">
              <div className="difficulty">
                <DisplayDifficultyIcon
                  difficulty={this.state.oneActivity.activity_difficulty}
                />
              </div>
              <h2>
                Session{" "}
                {this.state.oneActivity.sport_name.charAt(0).toUpperCase() +
                  this.state.oneActivity.sport_name.slice(1)}
              </h2>
              <h3>{this.state.oneActivity.activity_title}</h3>
            </div>
            <div className="activity_detail_right">
              <span className="activity_detail_icon">
                <FontAwesomeIcon className="ml-2 mr-1" icon="calendar-alt" />
                {formatDate(this.state.oneActivity.activity_start_time)}
              </span>
              <span className="activity_detail_icon">
                <FontAwesomeIcon className="ml-2 mr-1" icon="clock" />
                {
                  DateTime.fromSQL(this.state.oneActivity.activity_duration)
                    .hour
                }
                h
                {DateTime.fromSQL(this.state.oneActivity.activity_duration)
                  .minute > 0 &&
                  DateTime.fromSQL(this.state.oneActivity.activity_duration)
                    .minute}
              </span>
              <span className="activity_detail_icon">
                <FontAwesomeIcon className="ml-2 mr-1" icon="map-marker-alt" />
                {this.state.oneActivity.activity_city}
              </span>
              {this.state.oneActivity.activity_more_infos && (
                <span className="activity_detail_icon">
                  <FontAwesomeIcon className="ml-2 mr-1" icon="info-circle" />
                  {this.state.oneActivity.activity_more_infos}
                </span>
              )}
              <span className="activity_detail_icon">
                <FontAwesomeIcon className="ml-2 mr-1" icon="bolt" />
                Niveau{" "}
                {difficulty[this.state.oneActivity.activity_difficulty - 1]}
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
                  {this.state.oneActivity.user_pseudo}
                </Media>
              </Media>
            </div>
            <div className="activity_creator_right">
              <button className="activity_creator_button">
                Envoyer un message
              </button>
            </div>
          </div>
          <div className="activity_description">
            {this.state.oneActivity.activity_description}
          </div>
          <span className="nb_participants">
            1/{this.state.oneActivity.activity_max_participants} participants
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
      )
    );
  }
}
export default ActivityDetail;
