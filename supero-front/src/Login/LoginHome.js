import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./LoginHome.css";
import { Link } from "react-router-dom";
import { Spring } from "react-spring";

const LoginHome = () => {
  return (
    <Container fluid className="loginHome">
      <Row className="justify-content-center">
        <Spring
          config={{ delay: 800 }}
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
        >
          {props => (
            <Col style={props} xs="6">
              <div className="logo mt-5 mb-5">
                <img
                  style={{ width: "100%" }}
                  src={process.env.PUBLIC_URL + "/images/logo.png"}
                  alt="sport"
                  align="bottom"
                />
              </div>
            </Col>
          )}
        </Spring>

        <Col xs="12">
          <Spring
            config={{ delay: 1000 }}
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
          >
            {props => (
              <div style={props}>
                <p>L'application ultime pour devenir</p>
                <p style={{ fontWeight: "bold" }}>Le Dieu du sport</p>
              </div>
            )}
          </Spring>
          <Spring
            config={{ delay: 1000 }}
            from={{ opacity: 0, transform: "translate3d(-100px,0,0)" }}
            to={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          >
            {props => (
              <button style={props} className="button-home facebook">
                Se connecter avec <span>Facebook</span>
              </button>
            )}
          </Spring>
          <Spring
            config={{ delay: 1100 }}
            from={{ opacity: 0, transform: "translate3d(-100px,0,0)" }}
            to={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          >
            {props => (
              <Link to="SignInForm">
                <button style={props} className="button-home">
                  Rejoindre <span>les Dieux !</span>
                </button>
              </Link>
            )}
          </Spring>
          <Spring
            config={{ delay: 1200 }}
            from={{ opacity: 0, transform: "translate3d(-100px,0,0)" }}
            to={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          >
            {props => (
              <Link to="UserRegistration">
                <button style={props} className="button-home">
                  Pas encore <span>un dieu ?</span>
                </button>
              </Link>
            )}
          </Spring>
          <Spring
            config={{ delay: 1400 }}
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
          >
            {props => (
              <a style={props} className="password-forgotten" href="#">
                Mot de passe oublié ?
              </a>
            )}
          </Spring>
        </Col>
      </Row>
    </Container>
  );
};
export default LoginHome;
