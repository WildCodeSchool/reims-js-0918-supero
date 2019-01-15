import React from "react";
import { Field, reduxForm } from "redux-form";
import "./SignInForm.css";
import { Button, Container, Col, Row, FormGroup, Form } from "reactstrap";
import renderField from "./renderField";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import { toastr } from "react-redux-toastr";
import ComeFromTransparent from "../Animations/ComeFromTransparent";
import ComeFromLeft from "../Animations/ComeFromLeft";

const required = value =>
  value || typeof value === "number" ? undefined : "Required";
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
const aol = value =>
  value && /.+@aol\.com/.test(value)
    ? "Really? You still use AOL for your email?"
    : undefined;

const SignInForm = props => {
  const { handleSubmit, pristine, reset, submitting, history } = props;
  return (
    <Container fluid>
      <Form
        onSubmit={handleSubmit(values =>
          axios
            .post(`${process.env.REACT_APP_API}/auth/login`, values)
            .then(res => {
              if (res.data.toastType !== "error") {
                localStorage.setItem("superoUser", res.data.token);
                toastr.success("Succès", res.data.message);
                history.push("/ActivitiesList");
              } else {
                toastr.error("Erreur", res.data.message);
              }
            })
        )}
        className="SignIn-container"
      >
        <Row className="d-flex justify-content-center">
          <ComeFromTransparent delay={600}>
            <Col xs="6" style={{ margin: "0 auto" }}>
              <div className="logo mb-5">
                <img
                  style={{ width: "100%" }}
                  src={process.env.PUBLIC_URL + "/images/logo.png"}
                  alt="sport"
                  align="bottom"
                />
              </div>
            </Col>
          </ComeFromTransparent>
          <Col xs="10">
            <FormGroup>
              <ComeFromLeft delay={600}>
                <Field
                  name="email"
                  type="text"
                  component={renderField}
                  label="E-mail"
                  validate={[email, required]}
                  warn={aol}
                />
              </ComeFromLeft>
            </FormGroup>
            <FormGroup>
              <ComeFromLeft delay={700}>
                <Field
                  name="password"
                  type="password"
                  component={renderField}
                  label="Mots de passe"
                  validate={required}
                />
              </ComeFromLeft>
            </FormGroup>
            <ComeFromTransparent delay={800}>
              <div className="d-flex justify-content-center">
                <Button
                  className="button mr-4"
                  type="button"
                  disabled={pristine || submitting}
                  onClick={reset}
                >
                  Reset
                </Button>
                <Button className="button" type="submit" disabled={submitting}>
                  Connection
                </Button>
              </div>
              <div className="d-flex justify-content-center">
                <Link to="UserRegistration" className="password-forgotten">
                  Pas encore inscrit ?
                </Link>
              </div>
            </ComeFromTransparent>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default withRouter(
  reduxForm({
    form: "SignInForm"
  })(SignInForm)
);
