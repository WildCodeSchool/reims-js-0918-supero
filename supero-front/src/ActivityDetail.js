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
import Loading from "./Loading";
import { Link } from "react-router-dom";

import {
  faBolt,
  faClock,
  faMapMarkerAlt,
  faUser,
  faRunning,
  faInfoCircle,
  faBicycle,
  faCalendarAlt,
  faSwimmer
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faBolt,
  faClock,
  faMapMarkerAlt,
  faUser,
  faRunning,
  faBicycle,
  faInfoCircle,
  faCalendarAlt,
  faSwimmer
);
const difficulty = ["Facile", "Intermediaire", "Difficile", "Extrême"];

class ActivityDetail extends React.Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack();
  }

  componentDidMount() {
    const token = localStorage.getItem("superoUser");
    const activity_id = this.props.match.params.id;
    this.props.fetchActivity();
    axios
      .get(`http://localhost:3001/activities/${activity_id}`, {
        headers: {
          authorization: "Bearer " + token
        }
      })
      .then(res => this.props.activityDetailReceived(res.data[0]));
  }

  render() {
    return !this.props.activityDetail.sport_name ? (
      <Loading />
    ) : (
      <div className="activity_profile">
        <Header title="Détail" goBack={this.goBack} />

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
                `/images/${this.props.activityDetail.sport_name}.jpg`
              }
              alt="sport"
              align="bottom"
            />
          </div>
          <div className="activity_profile_pastille_orange rounded-circle">
            <FontAwesomeIcon
              className="ml-2 mr-1"
              icon={`${
                this.props.activityDetail.sport_name === "velo"
                  ? "bicycle"
                  : this.props.activityDetail.sport_name === "natation"
                  ? "swimmer"
                  : this.props.activityDetail.sport_name
              }`}
            />
          </div>
        </div>
        <div className="activity_detail">
          <div className="activity_detail_left">
            <div className="difficulty">
              <DisplayDifficultyIcon
                difficulty={this.props.activityDetail.activity_difficulty}
              />
            </div>

            <h2>
              Session{" "}
              {this.props.activityDetail.sport_name.charAt(0).toUpperCase() +
                this.props.activityDetail.sport_name.slice(1)}
            </h2>
            <h3>{this.props.activityDetail.activity_title}</h3>
          </div>
          <div className="activity_detail_right">
            <span className="activity_detail_icon">
              <FontAwesomeIcon className="ml-2 mr-1" icon="calendar-alt" />
              {formatDate(this.props.activityDetail.activity_start_time)}
            </span>
            <span className="activity_detail_icon">
              <FontAwesomeIcon className="ml-2 mr-1" icon="clock" />
              {
                DateTime.fromSQL(this.props.activityDetail.activity_duration)
                  .hour
              }
              h
              {DateTime.fromSQL(this.props.activityDetail.activity_duration)
                .minute > 0 &&
                DateTime.fromSQL(this.props.activityDetail.activity_duration)
                  .minute}
            </span>
            <span className="activity_detail_icon">
              <FontAwesomeIcon className="ml-2 mr-1" icon="map-marker-alt" />
              {this.props.activityDetail.activity_city}
            </span>
            {this.props.activityDetail.activity_more_infos && (
              <span className="activity_detail_icon">
                <FontAwesomeIcon className="ml-2 mr-1" icon="info-circle" />
                {this.props.activityDetail.activity_more_infos}
              </span>
            )}
            <span className="activity_detail_icon">
              <FontAwesomeIcon className="ml-2 mr-1" icon="bolt" />
              Niveau{" "}
              {difficulty[this.props.activityDetail.activity_difficulty - 1]}
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
                <Link
                  to={`/UserProfile/${this.props.activityDetail.creator_id}`}
                >
                  {this.props.activityDetail.user_pseudo}
                </Link>
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
          {this.props.activityDetail.activity_description}
        </div>
        <span className="nb_participants">
          1/{this.props.activityDetail.activity_max_participants} participants
        </span>
        <button className="activity_participation_button">Participer</button>
        <span className="activity_detail_icon" style={{ fontWeight: "300" }}>
          <FontAwesomeIcon className="ml-2 mr-1 mt-3" icon="map-marker-alt" />
          {this.props.activityDetail.activity_adresse}
        </span>
        <Map
          style={{ height: "250px", marginTop: "5px" }}
          // center={latlngValue.latlng}
          center={{
            lat: this.props.activityDetail.activity_latitude,
            lng: this.props.activityDetail.activity_longitude
          }}
          length={4}
          zoom={13}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[
              this.props.activityDetail.activity_latitude,
              this.props.activityDetail.activity_longitude
            ]}
          >
            <Popup>
              Votre activité. <br /> Easily customizable.
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}
export default ActivityDetail;
