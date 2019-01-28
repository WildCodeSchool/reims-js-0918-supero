import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
import validate from "./validate";
import renderField from "../renderField";
import ComeFromTransparent from "../Animations/ComeFromTransparent";
import ComeFromLeft from "../Animations/ComeFromLeft";

const SendPersonal = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <Container fluid>
      <Row className="d-flex justify-content-center">
        <Col xs="10">
          <Form onSubmit={handleSubmit} autoComplete="off">
            <ComeFromTransparent delay={300}>
              <h2 className="text-center">Qui êtes-vous ?</h2>
            </ComeFromTransparent>
            <FormGroup>
              <ComeFromLeft delay={400}>
                <Field
                  className="Form-Input"
                  name="firstName"
                  type="text"
                  component={renderField}
                  label="Prénom"
                />
              </ComeFromLeft>
            </FormGroup>
            <FormGroup>
              <ComeFromLeft delay={500}>
                <Field
                  className="Form-Input"
                  name="lastName"
                  type="text"
                  component={renderField}
                  label="Nom"
                />
              </ComeFromLeft>
            </FormGroup>
            <FormGroup>
              <ComeFromLeft delay={600}>
                <Input
                  className="Form-Input"
                  name="gender"
                  type="select"
                  tag={Field}
                  component="select"
                  label="Genre"
                >
                  <option value="" disabled>
                    Genre
                  </option>
                  <option value="Femme">Femme</option>
                  <option value="Homme">Homme</option>
                  <option value="Autre">Autre</option>
                </Input>
              </ComeFromLeft>
            </FormGroup>
            <FormGroup>
              <ComeFromLeft delay={700}>
                <Field
                  className="Form-Input"
                  name="birthdate"
                  type="date"
                  component={renderField}
                  label="Date de naissance"
                />
              </ComeFromLeft>
            </FormGroup>
            <ComeFromTransparent delay={800}>
              <div className="d-flex justify-content-between">
                <Button
                  type="button "
                  className="previous"
                  onClick={previousPage}
                >
                  Précédent
                </Button>
                <Button
                  type="submit"
                  className="valider"
                  disabled={pristine || submitting}
                >
                  Valider
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
  form: "userregistration", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(SendPersonal);
