import React, { Component, Fragment } from "react";
import SendSport from "./SendSport";
import SendPlaceContainer from "./SendPlaceContainer";
import SendInfo from "./SendInfo";
import SendTime from "./SendTime";
import "./AddActivityForm.css";
import Header from "../Header";

const SENDSPORT_PAGE = 1;
const SENDTIME_PAGE = 2;
const SENDPLACE_PAGE = 3;
const SENDINFO_PAGE = 4;

class AddActivityForm extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1
    };
  }

  goBack() {
    this.props.history.goBack();
  }

  submit = values => {
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
        creator_id: 1,
        activity_adresse: values.address.label,
        activity_latitude: values.address.y,
        activity_longitude: values.address.x,
        activity_duration: values.durationFull,
        activity_photo: values.picture,
        activity_title: values.title
      })
    })
      .then(res => res.json())
      .then(
        res => this.setState({ flash: res.flash }),
        err => this.setState({ flash: err.flash })
      )
      .then(this.props.history.push("/ActivitiesList"));
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
      <Fragment>
        <Header title="Nouvelle activité" goBack={this.goBack} />
        <div className="AddActivity-container">
          {page === SENDSPORT_PAGE && <SendSport onSubmit={this.nextPage} />}
          {page === SENDTIME_PAGE && (
            <SendTime
              previousPage={this.previousPage}
              onSubmit={this.nextPage}
            />
          )}
          {page === SENDPLACE_PAGE && (
            <SendPlaceContainer
              previousPage={this.previousPage}
              onSubmit={this.nextPage}
            />
          )}
          {page === SENDINFO_PAGE && (
            <SendInfo previousPage={this.previousPage} onSubmit={this.submit} />
          )}
        </div>
      </Fragment>
    );
  }
}

export default AddActivityForm;
