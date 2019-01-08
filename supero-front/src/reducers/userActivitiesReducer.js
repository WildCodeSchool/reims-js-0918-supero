import { USER_ACTIVITIES_RECEIVED } from "../actions/actionTypes";

const userActivitiesReducer = (previousState = [], action) => {
  switch (action.type) {
    case USER_ACTIVITIES_RECEIVED:
      return action.userActivities;
    default:
      return previousState;
  }
};

export default userActivitiesReducer;
