import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
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
import { toastr } from "react-redux-toastr";
import axios from "axios";

const MyAccount = props => {
  const goBack = () => props.history.goBack();
  const { handleSubmit, pristine, submitting } = props;
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <div style={{ paddingBottom: "10px" }}>
        <Header title="Vos informations" goBack={goBack} />
      </div>
      <div className="myAccount-container">
        <Container fluid>
          <Row className="d-flex justify-content-center">
            <Col xs="10">
              <Form
                onSubmit={handleSubmit(values =>
                  axios
                    .put(
                      `${process.env.REACT_APP_API}/users/${
                        props.initialValues.user_id
                      }`,
                      values,
                      {
                        headers: {
                          accept: "application/json",
                          authorization:
                            "Bearer " + localStorage.getItem("superoUser")
                        }
                      }
                    )
                    .then(res => {
                      if (res.data.toastType !== "error") {
                        toastr.success(
                          "Informations mises à jour !",
                          res.data.message,
                          props.history.push("/ActivitiesList")
                        );
                      } else {
                        toastr.error("Erreur", res.data.message);
                      }
                    })
                )}
              >
                <h2 className="text-center">Mon compte</h2>
                <FormGroup>
                  <p>Données personnelles :</p>
                  <Field
                    title="Votre prénom :"
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
                <p>Votre adresse e-mail :</p>
                <FormGroup>
                  <Field
                    className="Form-Input"
                    name="user_email"
                    type="text"
                    component={renderField}
                    label="E-mail"
                  />
                </FormGroup>
                <p>Infos supplémentaires :</p>
                <FormGroup>
                  <Field
                    name="user_about"
                    type="textarea"
                    component={renderField}
                    label="Plus d'infos sur vous"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    className="Form-Input"
                    name="user_level"
                    type="select"
                    tag={Field}
                    component="select"
                    label="Niveau"
                  >
                    <option value="" disabled>
                      Niveau
                    </option>
                    <option value="1">Péon</option>
                    <option value="2">Amateur</option>
                    <option value="3">Héros</option>
                    <option value="4">Demi-dieu</option>
                  </Input>
                </FormGroup>
                <div className="d-flex justify-content-between">
                  <Button
                    type="submit"
                    className="valider"
                    disabled={pristine || submitting}
                  >
                    Valider
                  </Button>
                  <Button
                    className="button"
                    tag={Link}
                    to={`/UserProfile/${props.initialValues.user_id}`}
                  >
                    Retour
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
