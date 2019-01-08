import { CONNECTED_USER_ACTIVITIES_RECEIVED } from "../actions/actionTypes";

const connectedUserActivitiesReducer = (previousState = [], action) => {
  switch (action.type) {
    case CONNECTED_USER_ACTIVITIES_RECEIVED:
      return action.connectedUserActivities;
    default:
      return previousState;
  }
};

export default connectedUserActivitiesReducer;
