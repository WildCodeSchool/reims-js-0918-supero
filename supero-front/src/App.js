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
    axios.get(`http://localhost:3001/activities`).then(res => {
      this.setState({ activitiesList: res.data });
      console.log(this.state.activitiesList);
    });
  }
  render() {
    return (
      <div>
        <Fragment>
          <ActivitiesList activities={this.state.activitiesList} />
          <ActivityDetail />
        </Fragment>
      </div>
    );
  }
}

export default App;
