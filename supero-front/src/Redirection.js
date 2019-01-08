import React, { Component } from "react";
import Header from "./Header";
import { Button } from "reactstrap";
import { Card, CardTitle, CardBody, CardImg, CardImgOverlay } from "reactstrap";
import "./Redirection.css";

class Redirection extends Component {
  render() {
    return (
      <div style={{ minHeight: "100vh" }}>
        <div style={{ paddingBottom: "10px" }}>
          <Header activitiesView={true} title="Activité créée !" />
        </div>
        <div className="activity-container">
          <Card className="activity" inverse>
            <CardImg width="100%" src="./images/default.jpg" alt="default" />
            <CardImgOverlay>
              <CardTitle>
                F
                {/* élicitations, votre activité a été correctement créée ! */}
              </CardTitle>
              <CardBody>
                Sou
                {/* haitez-vous retourner vers votre activité ou afficher le flux
                principal ? */}
              </CardBody>
              <Button>Retour vers l'activité</Button>
              <Button>Flux</Button>
            </CardImgOverlay>
          </Card>
        </div>
      </div>
    );
  }
}

export default Redirection;
