import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Form, FormGroup, Input } from "reactstrap";
import validate from "./validate";
import renderField from "./renderField";

const SendPlace = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          name="activity_adresse"
          tag={Field}
          type="text"
          component={renderField}
          label="Adresse"
        />
      </FormGroup>
      <FormGroup>
        <Input
          name="activity_city"
          tag={Field}
          type="text"
          component={renderField}
          label="Ville"
        />
      </FormGroup>
      <FormGroup>
        <Input
          name="activity_start_time"
          tag={Field}
          type="text"
          component={renderField}
          label="Date et heure de début"
        />
      </FormGroup>
      <FormGroup>
        <Input
          name="activity_duration"
          tag={Field}
          type="text"
          component={renderField}
          label="Durée"
        />
      </FormGroup>
      <FormGroup>
        <Input
          name="activity_max_participants"
          tag={Field}
          type="text"
          component={renderField}
          label="Limite maximum de participants"
        />
      </FormGroup>
      <div>
        <Button type="button" className="previous" onClick={previousPage}>
          Précédent
        </Button>
        <Button type="submit" className="next">
          Suivant
        </Button>
      </div>
    </Form>
  );
};

export default reduxForm({
  form: "addactivity", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(SendPlace);
