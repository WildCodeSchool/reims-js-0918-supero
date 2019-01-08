import React, { Component } from "react";
import Header from "./Header";
import { Button } from "reactstrap";
import { Card, CardTitle, CardBody, CardImg, CardImgOverlay } from "reactstrap";
import { Link } from "react-router-dom";
import "./Redirection.css";

class Redirection extends Component {
  render() {
    return (
      <div style={{ minHeight: "100vh" }}>
        <div style={{ paddingBottom: "10px" }}>
          <Header activitiesView={true} title="Activité créée !" />
        </div>
        <div className="redirection-container">
          <Card className="activity" inverse>
            <CardImg width="100%" src="./images/default.jpg" alt="default" />
            <CardImgOverlay>
              <CardTitle>Félicitations, votre activité a été créée !</CardTitle>
              <CardBody>
                Souhaitez-vous retourner vers votre activité ou afficher le flux
                principal ?
              </CardBody>
              <Button tag={Link} to="/ActivitiesList">
                Retour vers l'activité
              </Button>
              <Button tag={Link} to="/ActivityDetail/1">
                Flux
              </Button>
            </CardImgOverlay>
          </Card>
        </div>
      </div>
    );
  }
}

export default Redirection;
