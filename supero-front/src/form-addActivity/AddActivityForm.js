import React, { Component, Fragment } from "react";
import SendSport from "./SendSport";
import SendPlaceContainer from "./SendPlaceContainer";
import SendInfo from "./SendInfo";
import SendTime from "./SendTime";
import "./AddActivityForm.css";
import Header from "../Header";
import { toastr } from "react-redux-toastr";

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
    fetch(`${process.env.REACT_APP_API}/activities`, {
      method: "POST",
      headers: new Headers({
        accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("superoUser")}`
      }),
      body: JSON.stringify({
        sport_id: values.session,
        activity_city: values.city,
        activity_description: values.description,
        activity_start_time: values.start_time,
        activity_difficulty: values.difficulty,
        activity_more_infos: values.more_infos,
        activity_max_participants: values.participants,
        activity_adresse: values.address.label,
        activity_latitude: values.address.y,
        activity_longitude: values.address.x,
        activity_duration: values.durationFull,
        activity_photo: values.picture,
        activity_title: values.title
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.toastType !== "error") {
          toastr.success("Succès", res.message);
          this.props.history.push("/Redirection", {
            activityId: res.activityId
          });
        } else {
          toastr.error("Erreur", res.message);
        }
      });
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
