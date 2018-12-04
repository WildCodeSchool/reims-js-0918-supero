import React, { Component, Fragment } from "react";
import "./App.css";
import ActivitiesList from "./ActivitiesList";
import ActivityDetail from "./ActivityDetail";
import ActivitiesContainer from "./containers/ActivitiesContainer";
import AddActivityForm from "./form-addActivity/AddActivityForm";
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
          <br />
          <br />
          <br />
          <br />
          <AddActivityForm />
          <ActivitiesContainer />
          <ActivityDetail />
        </Fragment>
      </div>
    );
  }
}

export default App;
