import React, { Component, Fragment } from "react";
import "./App.css";
import ActivityDetail from "./ActivityDetail";
import ActivitiesContainer from "./containers/ActivitiesContainer";
import AddActivityForm from "./form-addActivity/AddActivityForm";
import Header from "./Header";
class App extends Component {
  render() {
    return (
      <div>
        <Fragment>
          <Header />
          <ActivitiesContainer />
          <ActivityDetail />
          <AddActivityForm />
        </Fragment>
      </div>
    );
  }
}

export default App;
