const validate = values => {
  const errors = {};
  if (!values.pseudo) {
    errors.pseudo = "Champ obligatoire";
  }
  if (!values.email) {
    errors.email = "Champ obligatoire";
  }
  if (!values.password) {
    errors.password = "Champ obligatoire";
  }
  if (!values.firstName) {
    errors.firstName = "Champ obligatoire";
  }
  if (!values.lastName) {
    errors.lastName = "Champ obligatoire";
  }
  if (!values.gender) {
    errors.gender = "Champ obligatoire";
  }
  if (!values.birthdate) {
    errors.birthdate = "Champ obligatoire";
  }
  if (!values.picture) {
    errors.picture = "Champ obligatoire";
  }
  if (!values.level) {
    errors.level = "Champ obligatoire";
  }
  if (!values.more_info) {
    errors.more_info = "Champ obligatoire";
  }
  return errors;
};

export default validate;
