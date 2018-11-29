import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import ActivitiesList from "./ActivitiesList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { activities, activitiesList: [] };
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
        {this.state.activitiesList.length > 0 && (
          <ActivitiesList activities={this.state.activitiesList} />
        )}
      </div>
    );
  }
}

export default App;
