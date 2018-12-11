import { SubmissionError } from "redux-form";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function submit(values) {
  return sleep(1000) // simulate server latency
    .then(() => {
      if (!["test@test.fr"].includes(values.email)) {
        throw new SubmissionError({
          email: "E-mail does not exist",
          _error: "E-mail failed!"
        });
      } else if (values.password !== "0000") {
        throw new SubmissionError({
          password: "Wrong password",
          _error: "Login failed!"
        });
      } else {
        console.log(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
      }
    });
}

export default submit;
