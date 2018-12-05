const validate = values => {
  const errors = {};
  if ((!values.session) || (values.session === "0")) {
    errors.session = "Required";
  }
  if (!values.title) {
    errors.title = "Required";
  }
  if ((!values.difficulty) || (values.difficulty === "0")) {
    errors.difficulty = "Required";
  }
  if (!values.city) {
    errors.city = "Required";
  }
  if (!values.start_time) {
    errors.start_time = "Required";
  }
  if (!values.duration) {
    errors.duration = "Required";
  }
  if (!values.participants) {
    errors.participants = "Required";
  }
  if (!values.description) {
    errors.description = "Required";
  }
  return errors;
};

export default validate;
