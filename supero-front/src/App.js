import React, { Component } from "react";
import "./App.css";
import ActivitiesContainer from "./containers/ActivitiesContainer";
import { Route, Switch } from "react-router";
import Header from "./Header";
import AddActivityForm from "./form-addActivity/AddActivityForm";
import ActivityDetail from "./ActivityDetail";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={ActivitiesContainer} />
          <Route exact path="/AddActivity" component={AddActivityForm} />
          <Route exact path="/ActivityDetail" component={ActivityDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
