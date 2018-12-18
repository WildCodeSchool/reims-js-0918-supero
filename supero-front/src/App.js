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
import ReduxToastr from "react-redux-toastr";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={LoginHome} />
          <Route exact path="/ActivitiesList" component={ActivitiesContainer} />
          <Route exact path="/AddActivity" component={AddActivityForm} />
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
