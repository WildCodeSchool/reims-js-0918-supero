import React, { Component } from "react";
import "./App.css";
import ActivitiesContainer from "./containers/ActivitiesContainer";
import { Route, Switch } from "react-router";
import AddActivityForm from "./form-addActivity/AddActivityForm";
import LoginHome from "./Login/LoginHome";
import ActivityDetailContainer from "./containers/ActivityDetailContainer";
import UserRegistration from "./form-registration/UserRegistration";
import SignInForm from "./form-signin/SignInForm";
import UserProfileContainer from "./containers/UserProfileContainer";
import ActivitiesOnMapContainer from "./containers/ActivitiesOnMapContainer";
import ReduxToastr from "react-redux-toastr";
import Avatar from "./Avatar";
import Redirection from "./Redirection";
import MyActivitiesContainer from "./containers/MyActivitiesContainer";
import Chat from "./Chat";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={LoginHome} />
          <Route exact path="/ActivitiesList" component={ActivitiesContainer} />
          <Route
            exact
            path="/ActivitiesOnMap"
            component={ActivitiesOnMapContainer}
          />
          <Route exact path="/Avatar" component={Avatar} />
          <Route exact path="/AddActivity" component={AddActivityForm} />
          <Route exact path="/Redirection" component={Redirection} />
          <Route
            exact
            path="/ActivityDetail/:id"
            component={ActivityDetailContainer}
          />
          <Route exact path="/SignInForm" component={SignInForm} />
          <Route exact path="/UserRegistration" component={UserRegistration} />
          <Route
            exact
            path="/UserProfile/:id"
            component={UserProfileContainer}
          />
          <Route exact path="/MyActivities" component={MyActivitiesContainer} />
          <Route exact path="/Chat" component={Chat} />
        </Switch>
        <ReduxToastr
          timeOut={3000}
          newestOnTop={false}
          preventDuplicates
          position="bottom-center"
          transitionIn="bounceIn"
          transitionOut="bounceOut"
          progressBar
          closeOnToastrClick
        />
      </div>
    );
  }
}

export default App;
