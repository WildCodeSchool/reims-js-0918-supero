import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Form, FormGroup, Container, Col, Row } from "reactstrap";
import validate from "./validate";
import renderField from "../renderField";

const SendIdentifiers = props => {
  const { handleSubmit } = props;
  return (
    <Container fluid>
      <Row className="d-flex justify-content-center">
        <Col xs="10">
          <Form onSubmit={handleSubmit}>
            <h2 className="text-center">Nouvel utilisateur</h2>
            <FormGroup>
              <Field
                className="Form-Input"
                name="pseudo"
                type="text"
                component={renderField}
                label="Pseudo"
              />
            </FormGroup>
            <FormGroup>
              <Field
                className="Form-Input"
                name="email"
                type="text"
                component={renderField}
                label="E-mail"
              />
            </FormGroup>
            <FormGroup>
              <Field
                className="Form-Input"
                name="password"
                type="password"
                component={renderField}
                label="Mot de passe"
              />
            </FormGroup>
            <FormGroup>
              <Field
                name="passwordBis"
                type="password"
                component={renderField}
                label="Mot de passe - confirmation"
              />
            </FormGroup>
            <div className="d-flex justify-content-end">
              <Button type="submit" className="next">
                Suivant
              </Button>
            </div>
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
