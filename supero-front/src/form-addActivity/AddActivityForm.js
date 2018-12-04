import React, { Component } from "react";
import SendSport from "./SendSport";
import SendPlace from "./SendPlace";
import SendInfo from "./SendInfo";

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
        sport_id: values.sport_id,
        activity_city: values.activity_city,
        activity_description: values.activity_description,
        activity_start_time: values.activity_start_time,
        activity_difficulty: values.activity_difficulty,
        activity_more_infos: values.activity_more_infos,
        activity_max_participants: values.activity_max_participants,
        creator_id: 3,
        activity_adresse: values.activity_adresse,
        activity_latitude: 49,
        activity_longitude: 78,
        activity_duration: values.activity_duration,
        activity_photo: values.activity_photo,
        activity_title: values.activity_title
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
      <div>
        {page === 1 && <SendSport onSubmit={this.nextPage} />}
        {page === 2 && (
          <SendPlace
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
