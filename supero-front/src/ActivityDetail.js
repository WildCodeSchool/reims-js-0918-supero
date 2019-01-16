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
import { toastr } from "react-redux-toastr";

import {
  faBolt,
  faClock,
  faMapMarkerAlt,
  faUser,
  faRunning,
  faInfoCircle,
  faBicycle,
  faCalendarAlt,
  faSwimmer,
  faDumbbell,
  faCity,
  faCloudSun
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
  faSwimmer,
  faDumbbell,
  faCity,
  faCloudSun
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
    this.getUserActivities();
    this.getActivityDetail();
  }

  componentDidUpdate(prevState) {
    if (
      prevState.connectedUserActivities.participation !==
      this.props.connectedUserActivities.participation
    ) {
      this.getUserActivities();
      this.getActivityDetail();
    }
  }

  getActivityDetail() {
    const token = localStorage.getItem("superoUser");
    const activity_id = this.props.match.params.id;
    this.props.fetchActivity();
    axios
      .get(`${process.env.REACT_APP_API}/activities/${activity_id}`, {
        headers: {
          authorization: "Bearer " + token
        }
      })
      .then(res => this.props.activityDetailReceived(res.data.result));
  }

  subscribeToActivity() {
    const token = localStorage.getItem("superoUser");
    const activity_id = { activity_id: this.props.match.params.id };
    axios
      .post(`${process.env.REACT_APP_API}/subscribe/`, activity_id, {
        headers: {
          authorization: "Bearer " + token
        }
      })
      .then(res => {
        if (res.data.toastType !== "error") {
          toastr.success("Succès", res.data.message);
        } else {
          toastr.error("Erreur", res.data.message);
        }
      });
  }

  unsubscribeToActivity() {
    const token = localStorage.getItem("superoUser");
    const activity_id = { activity_id: this.props.match.params.id };
    axios
      .post(`http://localhost:3001/unsubscribe/`, activity_id, {
        headers: {
          authorization: "Bearer " + token
        }
      })
      .then(res => {
        if (res.data.toastType !== "error") {
          toastr.success("Succès", res.data.message);
        } else {
          toastr.error("Erreur", res.data.message);
        }
      });
  }

  deleteActivity() {
    const token = localStorage.getItem("superoUser");
    const activity_id = this.props.match.params.id;
    axios
      .delete(`http://localhost:3001/activity/${activity_id}`, {
        headers: {
          authorization: "Bearer " + token
        }
      })
      .then(res => {
        if (res.data.toastType !== "error") {
          toastr.success("Succès", res.data.message);
        } else {
          toastr.error("Erreur", res.data.message);
        }
      })
      .then(this.getUserActivities())
      .then(this.props.history.push("/ActivitiesList"));
  }

  getUserActivities = () => {
    axios
      .get(`http://localhost:3001/userActivities`, {
        headers: {
          accept: "application/json",
          authorization: "Bearer " + localStorage.getItem("superoUser")
        }
      })
      .then(res => {
        this.props.getConnectedUserActivities(res.data);
      });
  };

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
                `/images/${this.props.activityDetail.sport_name.replace(
                  /[. ,:-]+/g,
                  ""
                )}.jpg`
              }
              alt="sport"
              align="bottom"
            />
          </div>
          <div className="activity_profile_pastille_orange rounded-circle">
            <FontAwesomeIcon
              className="pl-1 pr-1"
              icon={`${
                this.props.activityDetail.sport_name === "velo"
                  ? "bicycle"
                  : this.props.activityDetail.sport_name === "natation"
                  ? "swimmer"
                  : this.props.activityDetail.sport_name === "musculation"
                  ? "dumbbell"
                  : this.props.activityDetail.sport_name === "running"
                  ? "running"
                  : this.props.activityDetail.sport_name ===
                    "autres sports ext."
                  ? "cloud-sun"
                  : "city"
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
                  src={`${process.env.REACT_APP_API}/images/${
                    this.props.activityDetail.user_photo
                  }`}
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
              <Link to={`/Chat/${this.props.activityDetail.activity_id}`}>
                Envoyer un message
              </Link>
            </button>
          </div>
        </div>
        <div className="activity_description">
          {this.props.activityDetail.activity_description}
          {this.props.activityDetail.activity_more_infos && (
            <div className="activity_detail_icon">
              <FontAwesomeIcon className="mr-1" icon="info-circle" />
              {this.props.activityDetail.activity_more_infos}
            </div>
          )}
        </div>

        <span className="nb_participants">
          {this.props.activityDetail.nb_participants}/
          {this.props.activityDetail.activity_max_participants} participants
        </span>
        {this.props.activityDetail.creator_id !==
        this.props.connectedUser.user_id ? (
          this.props.connectedUserActivities.participation.filter(
            activity =>
              activity.activity_id === this.props.activityDetail.activity_id
          ).length > 0 ? (
            <button
              style={{
                color: "#e57419",
                backgroundColor: "#fff"
              }}
              onClick={() => this.unsubscribeToActivity()}
              className="activity_participation_button"
            >
              Se désinscrire
            </button>
          ) : this.props.activityDetail.nb_participants ===
            this.props.activityDetail.activity_max_participants ? (
            <button
              style={{
                color: "#7c7c7c",
                backgroundColor: "#fff"
              }}
              className="activity_participation_button"
            >
              COMPLET
            </button>
          ) : (
            <button
              onClick={() => this.subscribeToActivity()}
              className="activity_participation_button"
            >
              Participer
            </button>
          )
        ) : (
          <button
            style={{
              color: "#e57419",
              backgroundColor: "#fff"
            }}
            onClick={() => this.deleteActivity()}
            className="activity_participation_button"
          >
            Supprimer
          </button>
        )}
        <p className="activity_detail_icon" style={{ fontWeight: "300", padding: "0 20px", fontFamily:"Open Sans, sans-serif" }}>
          <FontAwesomeIcon className="mr-1 mt-3" icon="map-marker-alt" />
          {this.props.activityDetail.activity_adresse}
        </p>
        <Map
          style={{ height: "250px", marginTop: "5px" }}
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
