import React, { Component, Fragment } from "react";
import SendIdentifiers from "./SendIdentifiers";
import SendPersonal from "./SendPersonal";
import SendInfo from "./SendInfo";
import Header from "../Header";
import { toastr } from "react-redux-toastr";

const SENDIDENTIFIERS_PAGE = 1;
const SENDPERSONAL_PAGE = 2;
const SENDINFO_PAGE = 3;

class UserRegistration extends Component {
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
    !values.pseudo &&
      (values.pseudo = `${values.firstName} ${values.lastName}`);
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({
        user_pseudo: values.pseudo,
        user_email: values.email,
        user_password: values.password,
        user_firstname: values.firstName,
        user_lastname: values.lastName,
        user_gender: values.gender,
        user_birthdate: values.birthdate,
        user_level: values.level,
        user_about: values.about,
        user_photo: "logo.png"
      })
    })
      .then(res => res.json())
      .then(
        res => {
          toastr.success("Succès", res.message);
          this.props.history.push({
            pathname: "/avatar",
            state: { email: values.email }
          });
        },

        err => toastr.error("Erreur", err.message)
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
      <Fragment>
        <Header title="Nouvel utilisateur" goBack={this.goBack} />
        <div className="UserRegistration-container">
          {page === SENDIDENTIFIERS_PAGE && (
            <SendIdentifiers onSubmit={this.nextPage} />
          )}
          {page === SENDPERSONAL_PAGE && (
            <SendPersonal
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

export default UserRegistration;
