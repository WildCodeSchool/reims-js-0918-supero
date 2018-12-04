import React, { Component, Fragment } from "react";
import "./App.css";
import ActivityDetail from "./ActivityDetail";
import ActivitiesContainer from "./containers/ActivitiesContainer";
import AddActivityPage from "./form-addActivity/AddActivityPage";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div>
        <Fragment>
          <Header />
          <ActivitiesContainer />
          <ActivityDetail />
          <AddActivityPage />
        </Fragment>
      </div>
    );
  }
}

export default App;
