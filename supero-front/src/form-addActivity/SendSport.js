import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";

const SendSport = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Indiquez le sport pratiqué :</label>
      </div>
      <Field name="sport_id" type="select" component="select" label="Session">
        <option>Session</option>
        <option value="1">Running</option>
        <option value="2">Vélo</option>
        <option value="3">Natation</option>
        <option value="4">Musculation</option>
        <option value="5">Autres sports ext.</option>
        <option value="6">Autres sports int.</option>
      </Field>
      <Field
        name="activity_title"
        type="text"
        component={renderField}
        label="Nom de l'activité"
      />
      <div>
        <label>Difficulté</label>
      </div>
      <Field
        name="activity_difficulty"
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
          Suivant
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
