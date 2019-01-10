import React, { Component, Fragment } from "react";
import Header from "./Header";

class MyConversations extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    return (
      <div style={{ minHeight: "100vh" }}>
        <div style={{ paddingBottom: "10px" }}>
          <Header title="Mes conversations" goBack={this.goBack} />
        </div>
        <Fragment>
          <div style={{ paddingTop: "80px" }} />
        </Fragment>
      </div>
    );
  }
}

export default MyConversations;
