import React from "react";
import AddActivityForm from "./OldAddActivityForm";

class AddActivityPage extends React.Component {
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
        activity_adresse: "85 rue de la papetrie",
        activity_latitude: 49,
        activity_longitude: 78,
        activity_duration: 2,
        activity_photo: "photo.png",
        activity_creation_time: "2018-12-04",
        activity_title: "on fait le sport"
      })
    })
      .then(res => res.json())
      .then(
        res => this.setState({ flash: res.flash }),
        err => this.setState({ flash: err.flash })
      );
  };
  render() {
    return <AddActivityForm onSubmit={this.submit} />;
  }
}
export default AddActivityPage;
