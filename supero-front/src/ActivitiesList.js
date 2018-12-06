import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import axios from "axios";
import Activity from "./Activity";
import { Link } from "react-router-dom";

class ActivitiesList extends Component {
  componentDidMount() {
    axios
      .get(`http://localhost:3001/activities`)
      .then(res => this.props.activitiesReceived(res.data));
  }

  render() {
    return (
      <div style={{ paddingTop: "60px" }}>
        {this.props.activities.map((activity, index) => (
          <Activity key={index} {...activity} />
        ))}
        <Link to="AddActivity">
          <Button className="addActivityButton">+</Button>
        </Link>
      </div>
    );
  }
}
ActivitiesList.propTypes = {
  activities: PropTypes.array.isRequired
};

export default ActivitiesList;
