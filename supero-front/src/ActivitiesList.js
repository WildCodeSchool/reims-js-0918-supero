import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import axios from "axios";
import Activity from "./Activity";
import { Link } from "react-router-dom";
import Header from "./Header";

class ActivitiesList extends Component {
  componentDidMount() {
    axios
      .get(`http://localhost:3001/activities`)
      .then(res => this.props.activitiesReceived(res.data));
  }

  render() {
    return (
      <Fragment>
        <Header title="Flux" />
        <div style={{ paddingTop: "60px", paddingBottom: "10px" }}>
          {this.props.activities.map((activity, index) => (
            <Link to="ActivityDetail">
              <Activity key={index} {...activity} />
            </Link>
          ))}
          <Link to="AddActivity">
            <Button className="addActivityButton">+</Button>
          </Link>
        </div>
      </Fragment>
    );
  }
}
ActivitiesList.propTypes = {
  activities: PropTypes.array.isRequired
};

export default ActivitiesList;
