import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Form, FormGroup, Container, Col, Row } from "reactstrap";
import renderField from "./renderField";
import AddressInput from "./AddressInput";

const SendPlace = props => {
  const { handleSubmit, previousPage, selectAddress, addressSelected } = props;
  return (
    <Container fluid>
      <Row className="d-flex justify-content-center">
        <Col xs="10">
          <Form onSubmit={handleSubmit}>
            <h2 className="text-center">Où et quand ?</h2>
            {/* <FormGroup>
              <Field
                name="address"
                type="text"
                component={renderField}
                label="Adresse"
              />
            </FormGroup> */}
            <FormGroup>
              <Field
                name="address"
                type="text"
                component={AddressInput}
                label="Adresse"
                selectAddress={selectAddress}
                adressSelected={addressSelected}
              />
            </FormGroup>
            <FormGroup>
              <Field
                name="city"
                type="text"
                component={renderField}
                label="Ville"
              />
            </FormGroup>
            <FormGroup>
              <Field
                name="start_time"
                type="datetime-local"
                component={renderField}
                label="Date et heure de début"
              />
            </FormGroup>
            <FormGroup>
              <Field
                name="duration"
                type="time"
                component={renderField}
                label="Durée"
              />
            </FormGroup>
            <FormGroup>
              <Field
                name="participants"
                type="number"
                component={renderField}
                label="Limite maximum de participants"
              />
            </FormGroup>
            <div className="d-flex justify-content-between">
              <Button type="button" className="previous" onClick={previousPage}>
                Précédent
              </Button>
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

export default SendPlace;
