import React, { Component, Fragment } from "react";
import Header from "./Header";
import axios from "axios";
import Loading from "./Loading";
// import { Button } from "reactstrap";
// import { Link } from "react-router-dom";
import "./myAccount.css";

class MyAccount extends Component {
  async componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_API}/connecteduser`, {
        headers: {
          accept: "application/json",
          authorization: "Bearer " + localStorage.getItem("superoUser")
        }
      })
      .then(res => {
        this.props.getConnectedUser(res.data);
      });
  }

  render() {
    return (
      <div
        style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
      >
        <div style={{ paddingBottom: "10px" }}>
          <Header title="Succès !" />
        </div>
        <div className="myAccount-container">
          {!this.props.loading ? (
            <Fragment>
              <h3>{this.props.connectedUser.user_pseudo}</h3>
            </Fragment>
          ) : (
            <Fragment>
              <Loading />
            </Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default MyAccount;
