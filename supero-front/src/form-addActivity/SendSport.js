import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Container,
  Col,
  Row
} from "reactstrap";
import validate from "./validate";
import renderField from "../renderField";

const SendSport = props => {
  const { handleSubmit } = props;
  return (
    <Container fluid>
      <Row className="d-flex justify-content-center">
        <Col xs="10">
          <Form onSubmit={handleSubmit}>
            <h2 className="text-center">Activité proposée</h2>
            <FormGroup>
              <Input
                className="Form-Input"
                name="session"
                tag={Field}
                type="select"
                component="select"
                label="Session"
              >
                <option value="" disabled>
                  Sports
                </option>
                <option value="1">Running</option>
                <option value="2">Vélo</option>
                <option value="3">Natation</option>
                <option value="4">Musculation</option>
                <option value="5">Autres sports ext.</option>
                <option value="6">Autres sports int.</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Field
                className="Form-Input"
                name="title"
                type="text"
                component={renderField}
                label="Nom de l'activité"
              />
            </FormGroup>
            <FormGroup>
              <Input
                className="Form-Input"
                name="difficulty"
                type="select"
                tag={Field}
                component="select"
                label="Difficulté"
              >
                <option value="" disabled>
                  Difficulté
                </option>
                <option value="1">Facile</option>
                <option value="2">Intermediaire</option>
                <option value="3">Difficile</option>
                <option value="4">Intense</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Field
                name="participants"
                type="number"
                component={renderField}
                label="Limite maximum de participants"
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
  form: "addactivity", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(SendSport);
