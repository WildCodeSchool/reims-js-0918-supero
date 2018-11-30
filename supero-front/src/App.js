import React, { Component, Fragment } from "react";
import "./App.css";
import ActivitiesList from "./ActivitiesList";
import ActivityDetail from "./ActivityDetail";
import ActivitiesContainer from "./containers/ActivitiesContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { activitiesList: [] };
  }

  render() {
    return (
      <div>
        <Fragment>
          <ActivitiesContainer />
          <ActivityDetail />
        </Fragment>
      </div>
    );
  }
}

export default App;
