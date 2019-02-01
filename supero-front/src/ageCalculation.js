import { DateTime } from "luxon";

const yearInMillis = 31536000000;
const ageCalculation = birthdate => {
  return (
    (DateTime.fromJSDate(new Date()) - DateTime.fromISO(birthdate).toJSDate()) /
    yearInMillis
  ).toFixed(0);
};
export default ageCalculation;
