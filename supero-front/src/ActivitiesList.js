import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import axios from "axios";
import Activity from "./Activity";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import Header from "./Header";

class ActivitiesList extends Component {
  componentDidMount() {
    this.props.fetchActivities();
    axios
      .get(`http://localhost:3001/activities`)
      .then(res => this.props.activitiesReceived(res.data));
  }

  render() {
    return !this.props.loading ? (
      <Fragment>
        <Header title="Flux" />
        <div style={{ paddingTop: "60px", paddingBottom: "10px" }}>
          {this.props.activities.map((activity, index) => (
            <Link key={index} to="ActivityDetail">
              <Activity key={index} {...activity} />
            </Link>
          ))}
          <Link to="AddActivity">
            <Button className="addActivityButton">+</Button>
          </Link>
        </div>
      </Fragment>
    ) : (
      <Fragment>
        <Header title="Flux" />
        <Loading />
      </Fragment>
    );
  }
}
ActivitiesList.propTypes = {
  activities: PropTypes.array.isRequired
};

export default ActivitiesList;
