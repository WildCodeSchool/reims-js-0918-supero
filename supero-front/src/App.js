import React, { Component } from "react";
import "./App.css";
import ActivitiesContainer from "./containers/ActivitiesContainer";
import { Route, Switch } from "react-router";
import AddActivityForm from "./form-addActivity/AddActivityForm";
import LoginHome from "./Login/LoginHome";
import ActivityDetail from "./ActivityDetail";
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={LoginHome} />
          <Route exact path="/ActivitiesList" component={ActivitiesContainer} />
          <Route exact path="/AddActivity" component={AddActivityForm} />
          <Route exact path="/ActivityDetail/:id" component={ActivityDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
