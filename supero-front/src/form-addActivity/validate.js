const validate = values => {
  const errors = {};
  if (!values.session) {
    errors.session = "Champ obligatoire";
  }

  if (values.address === undefined) {
    errors.address = "Champ obligatoire";
  }

  if (!values.title) {
    errors.title = "Champ obligatoire";
  }
  if (!values.difficulty) {
    errors.difficulty = "Champ obligatoire";
  }
  if (!values.city) {
    errors.city = "Champ obligatoire";
  }
  if (!values.start_time) {
    errors.start_time = "Champ obligatoire";
  }
  if (!values.duration) {
    errors.duration = "Champ obligatoire";
  } else if (values.duration) {
    values.durationFull = `${values.duration}:00`;
  }
  if (!values.participants) {
    errors.participants = "Champ obligatoire";
  }
  if (!values.description) {
    errors.description = "Champ obligatoire";
  }
  return errors;
};

export default validate;
