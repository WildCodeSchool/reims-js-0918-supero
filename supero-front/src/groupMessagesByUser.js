const groupMessagesByUser = (messages, messageUser) => {
  return messages.reduce((acc, message) => {
    if (!acc[message.user_id]) {
      acc[message.user_id] = [];
    }
    acc[message.user_id] = [...acc[message.user_id], message];
    return acc;
  }, {});
};

export default groupMessagesByUser;
