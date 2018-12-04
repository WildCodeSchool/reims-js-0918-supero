import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";

const SendSport = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="session" type="select" component="select" label="Session">
        <option>Session</option>
        <option value="running">Running</option>
        <option value="cycling">Vélo</option>
        <option value="swimming">Natation</option>
        <option value="musculation">Musculation</option>
        <option value="exterieur">Autres sports ext.</option>
        <option value="interieur">Autres sports int.</option>
      </Field>
      <Field
        name="title"
        type="text"
        component={renderField}
        label="Nom de l'activité"
      />
      <Field
        name="difficulty"
        type="select"
        component="select"
        label="Difficulté"
      >
        <option>Difficulté</option>
        <option value="1">Facile</option>
        <option value="2">Intermediaire</option>
        <option value="3">Difficile</option>
        <option value="4">Intense</option>
      </Field>
      <div>
        <button type="submit" className="next">
          Next
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "addactivity", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(SendSport);
