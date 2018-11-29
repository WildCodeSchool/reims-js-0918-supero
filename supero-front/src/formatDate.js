const { DateTime } = require("luxon");

const formatDate = newDate => {
  const dateFormated = DateTime.fromISO(newDate)
    .setLocale("fr")
    .toFormat("D");
  return dateFormated;
};
export default formatDate;
