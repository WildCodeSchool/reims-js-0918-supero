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

import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faMapMarkedAlt);

class ActivitiesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activitiesQuery: ""
    };
  }

  componentDidMount() {
    this.getAllActivities();
  }

  getAllActivities = () => {
    this.props.fetchActivities();
    axios
      .get(`http://localhost:3001/activities?page=${this.props.activePage}`, {
        headers: {
          accept: "application/json",
          authorization: "Bearer " + localStorage.getItem("superoUser")
        }
      })
      .then(res => {
        this.props.activitiesReceived(res.data);
      });
  };

  searchActivities = request => {
    this.props.fetchActivities();
    axios
      .get(`http://localhost:3001/search/${request}`, {
        headers: {
          accept: "application/json",
          authorization: "Bearer " + localStorage.getItem("superoUser")
        }
      })
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

  render() {
    return (
      <div style={{ minHeight: "100vh" }}>
        <div style={{ paddingBottom: "10px" }}>
          <Header activitiesView={true} title="Flux" />
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
        </div>
        {!this.props.loading ? (
          <Fragment>
            <Button onClick={() => this.changePage(2)}>2</Button>
            {this.props.activities.map((activity, index) => (
              <Link key={index} to={`ActivityDetail/${activity.activity_id}`}>
                <Activity key={index} {...activity} />
              </Link>
            ))}
            <Link to="AddActivity">
              <Button className="addActivityButton">+</Button>
            </Link>
            <Link to="ActivitiesOnMap">
              <Button className="goToGeoloc">
                <FontAwesomeIcon className="" icon="map-marked-alt" />
              </Button>
            </Link>
          </Fragment>
        ) : (
          <Fragment>
            <Loading />
          </Fragment>
        )}
      </div>
    );
  }
}
ActivitiesList.propTypes = {
  activities: PropTypes.array.isRequired
};

export default ActivitiesList;
