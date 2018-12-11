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
    console.log(values);
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
