const { DateTime } = require("luxon");

const formatDate = newDate =>
  DateTime.fromISO(newDate)
    .setLocale("fr")
    .toFormat("D");
export default formatDate;
