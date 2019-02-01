const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = "Champ obligatoire";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = "Champ obligatoire";
  } else if (values.password !== values.passwordBis) {
    errors.passwordBis = "Vos mots de passe ne correspondent pas"
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
  if (!values.level) {
    errors.level = "Champ obligatoire";
  }
  return errors;
};

export default validate;
