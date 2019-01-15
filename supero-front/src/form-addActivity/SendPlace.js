import React from "react";
import { Field } from "redux-form";
import { Button, Form, FormGroup, Container, Col, Row } from "reactstrap";
import renderField from "../renderField";
import AddressInput from "./AddressInput";
import ViewAddressOnMap from "./ViewAddressOnMap";
import ComeFromTransparent from "../Animations/ComeFromTransparent";
import ComeFromLeft from "../Animations/ComeFromLeft";

const SendPlace = props => {
  const { handleSubmit, previousPage, selectAddress, addressSelected } = props;
  return (
    <Container fluid>
      <Row className="d-flex justify-content-center">
        <Col xs="10">
          <Form onSubmit={handleSubmit}>
            <ComeFromTransparent delay={300}>
              <h2 className="text-center">Où ?</h2>
            </ComeFromTransparent>
            <FormGroup>
              <ComeFromLeft delay={400}>
                {" "}
                <Field
                  name="address"
                  type="text"
                  component={AddressInput}
                  label="Adresse"
                  selectAddress={selectAddress}
                  adressSelected={addressSelected}
                />
              </ComeFromLeft>
            </FormGroup>
            {addressSelected.x && (
              <ComeFromTransparent delay={0}>
                <ViewAddressOnMap addressCoordinates={addressSelected} />
              </ComeFromTransparent>
            )}
            <FormGroup>
              <ComeFromLeft delay={500}>
                <Field
                  name="city"
                  type="text"
                  component={renderField}
                  label="Ville"
                />
              </ComeFromLeft>
            </FormGroup>
            <ComeFromTransparent delay={600}>
              <div className="d-flex justify-content-between">
                <Button
                  type="button"
                  className="previous"
                  onClick={previousPage}
                >
                  Précédent
                </Button>
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

export default SendPlace;
