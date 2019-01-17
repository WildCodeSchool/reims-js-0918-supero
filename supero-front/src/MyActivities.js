import React, { Component, Fragment } from "react";
import Activity from "./Activity";
import { Link } from "react-router-dom";
import Header from "./Header";
import { Collapse } from "reactstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import "./MyActivities.css";
import classnames from "classnames";

library.add(faMapMarkedAlt);

class MyActivities extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.toggleParticipation = this.toggleParticipation.bind(this);
    this.toggleCreated = this.toggleCreated.bind(this);
    this.state = { collapseParticipation: false, collapseCreated: false };
  }

  goBack() {
    this.props.history.goBack();
  }

  toggleParticipation() {
    this.setState({ collapseParticipation: !this.state.collapseParticipation });
  }

  toggleCreated() {
    this.setState({ collapseCreated: !this.state.collapseCreated });
  }
  render() {
    return (
      <div style={{ minHeight: "100vh" }}>
        <div style={{ paddingBottom: "10px" }}>
          <Header title="Mes activités" goBack={this.goBack} />
        </div>
        <Fragment>
          <div style={{ paddingTop: "80px" }}>
            <h4
              onClick={this.toggleParticipation}
              style={{ display: "flex", justifyContent: "space-between" }}
              className={classnames("buttonMyActivities", {
                active: this.state.collapseParticipation === true
              })}
            >
              <span>Participés</span> <i className="fas fa-chevron-up" />
            </h4>

            <Collapse isOpen={this.state.collapseParticipation}>
              {this.props.connectedUserActivities &&
                this.props.connectedUserActivities.participation.map(
                  (activity, index) => (
                    <Link
                      key={index}
                      to={`ActivityDetail/${activity.activity_id}`}
                    >
                      <Activity key={index} {...activity} />
                    </Link>
                  )
                )}
            </Collapse>
          </div>
          <div style={{ marginTop: "20px" }}>
            <h4
              style={{ display: "flex", justifyContent: "space-between" }}
              onClick={this.toggleCreated}
              className={classnames("buttonMyActivities", {
                active: this.state.collapseCreated === true
              })}
            >
              <span>Organisés</span> <i className="fas fa-chevron-up" />
            </h4>

            <Collapse isOpen={this.state.collapseCreated}>
              {this.props.connectedUserActivities &&
                this.props.connectedUserActivities.created.map(
                  (activity, index) => (
                    <Link
                      key={index}
                      to={`ActivityDetail/${activity.activity_id}`}
                    >
                      <Activity key={index} {...activity} />
                    </Link>
                  )
                )}
            </Collapse>
          </div>
        </Fragment>
      </div>
    );
  }
}

export default MyActivities;
