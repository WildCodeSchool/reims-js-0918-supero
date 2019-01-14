import React, { Component } from "react";
import Header from "./Header";
// import { Button } from "reactstrap";
// import { Link } from "react-router-dom";
import "./myAccount.css";

class MyAccount extends Component {
  render() {
    return (
      <div
        style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
      >
        <div style={{ paddingBottom: "10px" }}>
          <Header title="Succès !" />
        </div>
        <div className="myAccount-container">
          <h3>Félicitations !</h3>
        </div>
      </div>
    );
  }
}

export default MyAccount;
