import React from "react";
import Header from "../Header";
// import { Button } from "reactstrap";
// import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import "./myAccount.css";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
import renderField from "../renderField";

const MyAccount = props => {
  console.log(props)
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <div style={{ paddingBottom: "10px" }}>
        <Header title="Succès !" />
      </div>
      <div className="myAccount-container">
        <Container fluid>
          <Row className="d-flex justify-content-center">
            <Col xs="10">
              <Form onSubmit={handleSubmit}>
                <h2 className="text-center">Qui êtes-vous ?</h2>
                <FormGroup>
                  <Field
                    className="Form-Input"
                    name="user_firstname"
                    type="text"
                    component={renderField}
                    label="Prénom"
                  />
                </FormGroup>
                <FormGroup>
                  <Field
                    className="Form-Input"
                    name="user_lastname"
                    type="text"
                    component={renderField}
                    label="Nom"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    className="Form-Input"
                    name="user_gender"
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
                </FormGroup>
                <FormGroup>
                  <Field
                    className="Form-Input"
                    name="user_birthdate"
                    type="date"
                    component={renderField}
                    label="Date de naissance"
                  />
                </FormGroup>
                <div className="d-flex justify-content-between">
                  <Button
                    type="submit"
                    className="valider"
                    disabled={pristine || submitting}
                  >
                    Valider
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default reduxForm({
  form: "initializeFromState"
})(MyAccount);
