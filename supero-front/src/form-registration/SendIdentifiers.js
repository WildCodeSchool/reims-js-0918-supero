import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Form, FormGroup, Container, Col, Row } from "reactstrap";
import validate from "./validate";
import renderField from "../renderField";
import ComeFromTransparent from "../Animations/ComeFromTransparent";
import ComeFromLeft from "../Animations/ComeFromLeft";

const SendIdentifiers = props => {
  const { handleSubmit } = props;
  return (
    <Container fluid>
      <Row className="d-flex justify-content-center">
        <Col xs="10">
          <Form onSubmit={handleSubmit}>
            <ComeFromTransparent delay={300}>
              <h2 className="text-center">Nouvel utilisateur</h2>
            </ComeFromTransparent>
            <FormGroup>
              <ComeFromLeft delay={400}>
                <Field
                  className="Form-Input"
                  name="pseudo"
                  type="text"
                  component={renderField}
                  label="Pseudo"
                />
              </ComeFromLeft>
            </FormGroup>
            <FormGroup>
              <ComeFromLeft delay={500}>
                <Field
                  className="Form-Input"
                  name="email"
                  type="text"
                  component={renderField}
                  label="E-mail"
                />
              </ComeFromLeft>
            </FormGroup>
            <FormGroup>
              <ComeFromLeft delay={600}>
                <Field
                  className="Form-Input"
                  name="password"
                  type="password"
                  component={renderField}
                  label="Mot de passe"
                />
              </ComeFromLeft>
            </FormGroup>
            <FormGroup>
              <ComeFromLeft delay={700}>
                <Field
                  name="passwordBis"
                  type="password"
                  component={renderField}
                  label="Mot de passe - confirmation"
                />
              </ComeFromLeft>
            </FormGroup>
            <ComeFromTransparent delay={800}>
              <div className="d-flex justify-content-end">
                <Button type="submit" className="next">
                  Suivant
                </Button>
              </div>
            </ComeFromTransparent>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default reduxForm({
  form: "userregistration", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(SendIdentifiers);
