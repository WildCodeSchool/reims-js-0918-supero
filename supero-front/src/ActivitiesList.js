import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import axios from "axios";
import Activity from "./Activity";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import Header from "./Header";
import { Input } from "reactstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pagination from "react-js-pagination";

import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import ComeFromTop from "./Animations/ComeFromTop";
import ComeFromTransparent from "./Animations/ComeFromTransparent";
import { Trail } from "react-spring";

library.add(faMapMarkedAlt);

class ActivitiesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activitiesQuery: ""
    };

    this.changePage = this.changePage.bind(this);
  }

  async componentDidMount() {
    this.getAllActivities();
    this.getUserConnected();
  }

  getAllActivities = () => {
    this.props.fetchActivities();
    axios
      .get(
        `${process.env.REACT_APP_API}/activities?page=${
          this.props.activePage
        }&order=${this.props.order}`,
        {
          headers: {
            accept: "application/json",
            authorization: "Bearer " + localStorage.getItem("superoUser")
          }
        }
      )
      .then(res => {
        this.props.activitiesReceived(res.data);
      });
  };

  getUserConnected = () => {
    this.props.fetchActivities();
    axios
      .get(`${process.env.REACT_APP_API}/connecteduser`, {
        headers: {
          accept: "application/json",
          authorization: "Bearer " + localStorage.getItem("superoUser")
        }
      })
      .then(res => {
        this.props.getConnectedUser(res.data);
      })
      .then(this.getConnectedUserActivities());
  };

  getConnectedUserActivities = () => {
    axios
      .get(`${process.env.REACT_APP_API}/userActivities`, {
        headers: {
          accept: "application/json",
          authorization: "Bearer " + localStorage.getItem("superoUser")
        }
      })
      .then(res => {
        this.props.getConnectedUserActivities(res.data);
      });
  };

  searchActivities = request => {
    this.props.fetchActivities();
    axios
      .get(
        `${process.env.REACT_APP_API}/search/${request}?order=${
          this.props.order
        }`,
        {
          headers: {
            accept: "application/json",
            authorization: "Bearer " + localStorage.getItem("superoUser")
          }
        }
      )
      .then(res => {
        this.props.activitiesReceived(res.data);
      });
  };

  handleInput = event => {
    const request = event.target.value;
    this.setState(
      {
        activitiesQuery: request
      },
      request !== "" ? this.searchActivities(request) : this.getAllActivities()
    );
  };

  async changePage(page) {
    await this.props.changeActivePage(page);
    this.getAllActivities();
  }

  async changeOrder(order) {
    await this.props.changeActivitiesOrder(order);
    this.state.activitiesQuery.length > 0
      ? this.searchActivities(this.state.activitiesQuery)
      : this.getAllActivities();
  }

  render() {
    return (
      <div style={{ minHeight: "100vh" }}>
        <div style={{ paddingBottom: "10px" }}>
          <Header
            activitiesView={true}
            connectedUser={this.props.connectedUser}
            title="Flux"
          />
          <ComeFromTop delay={1000}>
            <div style={{ position: "relative" }}>
              <Input
                style={{ width: "90%", margin: "0 auto" }}
                className="Form-Input"
                onChange={event => this.handleInput(event)}
                placeholder="Chercher une activité"
                type="text"
                name="recherche"
                value={this.state.activitiesQuery}
              />
              <i
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "35px",
                  color: "rgba(255,255,255,0.4)"
                }}
                className="fas fa-search"
              />
            </div>
          </ComeFromTop>
        </div>
        <ComeFromTransparent delay={300}>
          <div
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Button
              className={
                "orderButton " +
                (this.props.order === "activity_creation_time" && "active")
              }
              onClick={() => this.changeOrder("activity_creation_time")}
            >
              Nouveautés
            </Button>
            <Button
              className={
                "orderButton " +
                (this.props.order === "activity_start_time" && "active")
              }
              onClick={() => this.changeOrder("activity_start_time")}
            >
              Prochainement
            </Button>
          </div>
        </ComeFromTransparent>
        {!this.props.loading ? (
          <Fragment>
            {this.props.activities.activities && (
              <Trail
                items={this.props.activities.activities}
                keys={item => item.activity_id}
                from={{ transform: "translate3d(-100px,0,0)", opacity: "0" }}
                to={{ transform: "translate3d(0,0px,0)", opacity: "1" }}
              >
                {activity => props => (
                  <div style={props}>
                    <Link to={`ActivityDetail/${activity.activity_id}`}>
                      <Activity {...activity} />
                    </Link>
                  </div>
                )}
              </Trail>
            )}

            <Pagination
              hideDisabled
              activePage={this.props.activePage}
              itemsCountPerPage={5}
              totalItemsCount={this.props.activities.activitiesTotal}
              pageRangeDisplayed={5}
              onChange={this.changePage}
            />
          </Fragment>
        ) : (
          <Fragment>
            <Loading />
          </Fragment>
        )}
        <ComeFromTransparent delay={1500}>
          <Link to="AddActivity">
            <Button className="addActivityButton">+</Button>
          </Link>
          <Link to="ActivitiesOnMap">
            <Button className="goToGeoloc">
              <FontAwesomeIcon className="" icon="map-marked-alt" />
            </Button>
          </Link>
        </ComeFromTransparent>
      </div>
    );
  }
}
ActivitiesList.propTypes = {
  activities: PropTypes.object.isRequired
};

export default ActivitiesList;
