import React, { Component } from "react";
import SendSport from "./SendSport";
import SendPlaceContainer from "./SendPlaceContainer";
import SendInfo from "./SendInfo";
import "./AddActivityForm.css";

class AddActivityForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1
    };
  }

  submit = values => {
    console.log(values);
    fetch("http://localhost:3001/activities", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({
        sport_id: values.session,
        activity_city: values.city,
        activity_description: values.description,
        activity_start_time: values.start_time,
        activity_difficulty: values.difficulty,
        activity_more_infos: values.more_infos,
        activity_max_participants: values.participants,
        creator_id: 3,
        activity_adresse: values.address,
        activity_latitude: 49,
        activity_longitude: 78,
        activity_duration: values.durationFull,
        activity_photo: values.picture,
        activity_title: values.title
      })
    })
      .then(res => res.json())
      .then(
        res => this.setState({ flash: res.flash }),
        err => this.setState({ flash: err.flash })
      );
  };

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { page } = this.state;
    return (
      <div className="AddActivity-container">
        {page === 1 && <SendSport onSubmit={this.nextPage} />}
        {page === 2 && (
          <SendPlaceContainer
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 3 && (
          <SendInfo previousPage={this.previousPage} onSubmit={this.submit} />
        )}
      </div>
    );
  }
}

export default AddActivityForm;
