import React from "react";
import DisplayDifficultyIcon from "./DisplayDifficultyIcon";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Media } from "reactstrap";
import "./ActivityDetail.css";
import Header from "./Header";
import axios from "axios";
import formatDate from "./formatDate";

import {
  faBolt,
  faClock,
  faMapMarkerAlt,
  faUser,
  faRunning,
  faInfoCircle,
  faBicycle
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faBolt,
  faClock,
  faMapMarkerAlt,
  faUser,
  faRunning,
  faBicycle,
  faInfoCircle
);
const difficulty = ["Facile", "Intermediaire", "Difficile", "Extrême"];

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
                maxHeight: "200px"
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
                <FontAwesomeIcon className="ml-2 mr-1" icon="clock" />
                {formatDate(this.state.oneActivity.activity_creation_time)}
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
      )
    );
  }
}
export default ActivityDetail;
