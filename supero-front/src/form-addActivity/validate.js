const validate = values => {
  const errors = {};
  if (!values.session) {
    errors.session = "Required";
  }
  if (!values.title) {
    errors.title = "Required";
  }
  if (!values.difficulty) {
    errors.difficulty = "Required";
  }
  if (!values.address) {
    errors.address = "Required";
  }
  if (!values.city) {
    errors.city = "Required";
  }
  if (!values.participants) {
    errors.participants = "Required";
  }
  if (!values.start_time) {
    errors.start_time = "Required";
  }
  if (!values.duration) {
    errors.duration = "Required";
  }
  if (!values.description) {
    errors.description = "Required";
  }
  return errors;
};

export default validate;
