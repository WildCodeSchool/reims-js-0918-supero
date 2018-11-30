import React, { Component, Fragment } from "react";
import "./App.css";
import axios from "axios";
import ActivitiesList from "./ActivitiesList";
import ActivityDetail from "./ActivityDetail";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { activitiesList: [] };
  }
  componentDidMount() {
    axios
      .get(`http://localhost:3001/activities`)
      .then(res => this.props.activitiesReceived(res.data));
  }
  render() {
    return (
      <div>
        <Fragment>
          <ActivitiesList activities={this.props.activities} />
          <ActivityDetail />
        </Fragment>
      </div>
    );
  }
}

export default App;
