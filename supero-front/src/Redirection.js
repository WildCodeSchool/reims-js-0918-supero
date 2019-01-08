import React, { Component } from "react";
import Header from "./Header";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./Redirection.css";

class Redirection extends Component {
  render() {
    return (
      <div
        style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
      >
        <div style={{ paddingBottom: "10px" }}>
          <Header redirection={true} title="Succès !" />
        </div>
        <div className="redirection-container">
          <h3>Félicitations !</h3>
          <h5>Votre activité a bien été ajoutée !</h5>
          <p>
            Souhaitez-vous afficher le flux principal ou revoir votre activité ?
          </p>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Button className="button" tag={Link} to="/ActivitiesList">
              Retour au flux
            </Button>
            <Button
              className="button"
              tag={Link}
              to={`/ActivityDetail/${this.props.location.state.activityId}`}
            >
              Voir l'activité
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Redirection;
