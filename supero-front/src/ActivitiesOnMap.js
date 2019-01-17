import React, { Component, Fragment } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { geolocated } from "react-geolocated";
import { Button } from "reactstrap";
import axios from "axios";
import formatDate from "./formatDate";
import { DateTime } from "luxon";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconActivityMap } from "./iconActivityMap";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import MarkerClusterGroup from "react-leaflet-markercluster";
import ComeFromTransparent from "./Animations/ComeFromTransparent";
require("react-leaflet-markercluster/dist/styles.min.css"); // inside .js file

library.add(faClock);
const difficulty = ["Facile", "Intermediaire", "Difficile", "Extrême"];

class ActivitiesOnMap extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack();
  }

  componentDidMount() {
    this.props.fetchActivities();
    axios
      .get(`${process.env.REACT_APP_API}/activities`, {
        headers: {
          accept: "application/json",
          authorization: "Bearer " + localStorage.getItem("superoUser")
        }
      })
      .then(res => {
        this.props.activitiesReceived(res.data);
      });
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Header goBack={this.goBack} title="Geolocalisation" />
        <ComeFromTransparent delay={300}>
          {!this.props.isGeolocationAvailable ? (
            <div
              style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                alignItems: "center"
              }}
            >
              <div style={{ marginTop: "-71px" }}>
                <h3 style={{ color: "#fff", width: "100%" }}>
                  Géolocalisation non supportée
                </h3>
                <Button
                  onClick={() => this.goBack()}
                  style={{
                    borderRadius: "41px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    padding: "7px 18px",
                    textTransform: "uppercase",
                    border: "1px solid rgba(255, 255, 255, 0.4)"
                  }}
                >
                  Retour
                </Button>
              </div>
            </div>
          ) : !this.props.isGeolocationEnabled ? (
            <div
              style={{
                height: "100vh",
                marginTop: "71px",
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                alignItems: "center"
              }}
            >
              <div style={{ marginTop: "-71px" }}>
                <h3 style={{ color: "#fff", width: "100%" }}>
                  Géolocalisation non activée
                </h3>
                <Button
                  onClick={() => this.goBack()}
                  style={{
                    borderRadius: "41px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    padding: "7px 18px",
                    textTransform: "uppercase",
                    border: "1px solid rgba(255, 255, 255, 0.4)"
                  }}
                >
                  Retour
                </Button>
              </div>
            </div>
          ) : this.props.coords ? (
            <Fragment>
              <Map
                className="mapByGeoloc"
                style={{ height: "100vh" }}
                center={[
                  this.props.coords.latitude,
                  this.props.coords.longitude
                ]}
                zoom={13}
                maxZoom={18}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <MarkerClusterGroup>
                  {this.props.activities.activities.map((activity, index) => (
                    <Marker
                      key={index}
                      position={[
                        activity.activity_latitude,
                        activity.activity_longitude
                      ]}
                      icon={iconActivityMap}
                    >
                      <Popup>
                        <h3
                          style={{
                            textTransform: "uppercase",
                            marginBottom: "0",
                            fontWeight: "bold"
                          }}
                        >
                          {activity.sport_name}
                        </h3>

                        <p style={{ marginTop: "0", marginBottom: "0" }}>
                          {activity.activity_title}
                        </p>

                        <p
                          style={{
                            textAlign: "center",
                            marginTop: "5px",
                            paddingBottom: "12px",
                            paddingTop: "12px",
                            borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
                            borderTop: "1px solid rgba(0, 0, 0, 0.2)"
                          }}
                        >
                          <span className="activity_detail_icon mr-3">
                            <FontAwesomeIcon className=" mr-1" icon="clock" />
                            {DateTime.fromSQL(activity.activity_duration).hour}h
                            {DateTime.fromSQL(activity.activity_duration)
                              .minute > 0 &&
                              DateTime.fromSQL(activity.activity_duration)
                                .minute}
                          </span>
                          <span className="activity_detail_icon mr-3">
                            <FontAwesomeIcon
                              className="ml-1 mr-1"
                              icon="calendar-alt"
                            />
                            {formatDate(activity.activity_start_time)}
                          </span>
                          <span className="activity_detail_icon mr-3">
                            <FontAwesomeIcon
                              className="ml-1 mr-1"
                              icon="bolt"
                            />
                            Niveau{" "}
                            {difficulty[activity.activity_difficulty - 1]}
                          </span>
                        </p>
                        <p style={{ textAlign: "center" }}>
                          <Button
                            style={{
                              borderRadius: "41px",
                              backgroundColor: "#e57419",
                              padding: "7px 18px",
                              textTransform: "uppercase",
                              border: "0",
                              fontWeight: "bold"
                            }}
                          >
                            <Link
                              style={{ color: "#fff" }}
                              to={`ActivityDetail/${activity.activity_id}`}
                            >
                              Voir l'activité
                            </Link>
                          </Button>
                        </p>
                      </Popup>
                    </Marker>
                  ))}
                </MarkerClusterGroup>
              </Map>
            </Fragment>
          ) : (
            <div
              style={{
                height: "100vh",
                marginTop: "71px",
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                alignItems: "center"
              }}
            >
              <h3 style={{ color: "#fff", width: "100%", marginTop: "-71px" }}>
                Géolocalisation en attente
              </h3>
            </div>
          )}
        </ComeFromTransparent>
      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(ActivitiesOnMap);
