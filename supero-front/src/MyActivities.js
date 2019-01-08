import React, { Component, Fragment } from "react";
import Activity from "./Activity";
import { Link } from "react-router-dom";
import Header from "./Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faMapMarkedAlt);

class MyActivities extends Component {
  render() {
    return (
      <div style={{ minHeight: "100vh" }}>
        <div style={{ paddingBottom: "10px" }}>
          <Header activitiesView={true} title="Mes activités" />
        </div>
        <Fragment>
          {this.props.connectedUserActivities &&
            this.props.connectedUserActivities.map((activity, index) => (
              <Link key={index} to={`ActivityDetail/${activity.activity_id}`}>
                <Activity key={index} {...activity} />
              </Link>
            ))}
        </Fragment>
      </div>
    );
  }
}

export default MyActivities;
