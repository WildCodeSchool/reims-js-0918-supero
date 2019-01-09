import groupMessagesByUser from "./groupMessagesByUser";

const formatMessagesByUser = (activities, activityDate) => {
  const groupByDateResult = groupMessagesByUser(activities, activityDate);

  const result = Object.keys(groupByDateResult).map(key => ({
    activities: groupByDateResult[key],
    date: key
  }));

  return result;
};

export default formatMessagesByUser;
