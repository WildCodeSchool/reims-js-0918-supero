import React, { Component } from "react";
import Header from "./Header";
import axios from "axios";
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
        console.log(res.data);
        console.log(this.props);
        // this.props.getConnectedUser(res.data);
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
          {this.props.connectedUser ? (
            // <h3>{this.props.connectedUser.user_pseudo}</h3>
            <h3>OUI</h3>
          ) : (
            <p>TROP PAS</p>
          )}
        </div>
      </div>
    );
  }
}

export default MyAccount;
