import { ACTIVITIES_RECEIVED } from "../actions/actionTypes";

const activitiesReducer = (previousState = {}, action) => {
  switch (action.type) {
    case ACTIVITIES_RECEIVED:
      return {
        activities: action.activities,
        activitiesTotal: action.activitiesTotal
      };
    default:
      return previousState;
  }
};

export default activitiesReducer;
