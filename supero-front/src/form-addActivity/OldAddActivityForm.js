import React from "react";
import { Field, reduxForm } from "redux-form";

const required = value =>
  value || typeof value === "number" ? undefined : "Required";
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength2 = minLength(2);
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Only alphanumeric characters"
    : undefined;

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

let AddActivityForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Géneral</legend>
        <Field
          name="sport_id"
          type="select"
          component="select"
          label="Session"
          validate={[required]}
        >
          <option>Session</option>
          <option value="1">Running</option>
          <option value="2">Vélo</option>
          <option value="3">Natation</option>
          <option value="4">Musculation</option>
          <option value="5">Autres sports ext.</option>
          <option value="6">Autres sports int.</option>
        </Field>

        <Field
          name="activity_city"
          type="text"
          component={renderField}
          label="Ville"
          validate={[required, minLength2]}
        />
      </fieldset>
      <fieldset>
        <legend>Description</legend>
        <Field
          name="activity_description"
          type="textarea"
          component={renderField}
          label="A propos"
          validate={[required, minLength2]}
        />
        <Field
          name="activity_start_time"
          type="text"
          component={renderField}
          label="Date"
          validate={[required, minLength2]}
        />
        <Field
          name="activity_difficulty"
          type="select"
          component="select"
          label="Difficulty"
          validate={[required]}
        >
          <option>Difficulté</option>
          <option value="1">Facile</option>
          <option value="2">Intermediaire</option>
          <option value="3">Difficile</option>
          <option value="4">Intense</option>
        </Field>
        <Field
          name="activity_more_infos"
          type="text"
          component={renderField}
          label="Recommandation"
          validate={[required, alphaNumeric, minLength2]}
        />
        <Field
          name="activity_max_participants"
          type="text"
          component={renderField}
          label="Limite participants"
          validate={[required, alphaNumeric]}
        />
      </fieldset>
      <div>
        <button type="submit" disabled={submitting}>
          Envoyer
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Reset
        </button>
      </div>
    </form>
  );
};

AddActivityForm = reduxForm({
  form: "addactivity"
})(AddActivityForm);

export default AddActivityForm;
