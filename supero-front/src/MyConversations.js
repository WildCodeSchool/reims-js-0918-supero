import React, { Component, Fragment } from "react";
import Header from "./Header";
import axios from "axios";

class MyConversations extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    this.getAllConversations();
  }

  getAllConversations = () => {
    axios
      .get(
        `http://localhost:3001/conversations/${this.props.match.params.userID}`,
        {
          headers: {
            accept: "application/json",
            authorization: "Bearer " + localStorage.getItem("superoUser")
          }
        }
      )
      .then(res => {
        console.log(res.data);
      });
  };

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
