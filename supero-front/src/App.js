import React, { Component, Fragment } from "react";
import "./App.css";
import ActivitiesList from "./ActivitiesList";
import ActivityDetail from "./ActivityDetail";
import ActivitiesContainer from "./containers/ActivitiesContainer";
import Header from "./Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { activitiesList: [] };
  }

  render() {
    return (
      <div>
        <Fragment>
          <Header />
          <ActivitiesContainer />
          <ActivityDetail />
        </Fragment>
      </div>
    );
  }
}

export default App;
