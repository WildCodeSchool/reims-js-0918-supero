import { CONNECTED_USER_RECEIVED } from "../actions/actionTypes";

const viewConnectedUserReducer = (previousState = {}, action) => {
  switch (action.type) {
    case CONNECTED_USER_RECEIVED:
      return action.connectedUser;
    default:
      return previousState;
  }
};

export default viewConnectedUserReducer;
