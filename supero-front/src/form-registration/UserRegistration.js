import React, { Component, Fragment } from "react";
import SendIdentifiers from "./SendIdentifiers";
import SendPersonal from "./SendPersonal";
import SendInfo from "./SendInfo";
import Header from "../Header";

const SENDIDENTIFIERS_PAGE = 1;
const SENDPERSONAL_PAGE = 2;
const SENDINFO_PAGE = 3;

class UserRegistration extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1
    };
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
        user_photo: values.picture,
        user_level: values.level,
        user_about: values.about
      })
    })
      .then(res => res.json())
      .then(
        res => this.setState({ flash: res.flash }),
        err => this.setState({ flash: err.flash })
      )
      .then(this.props.history.push("/SignInForm"));
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
        <Header title="Nouvel utilisateur" />
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
