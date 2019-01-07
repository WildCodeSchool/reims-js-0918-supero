import { CHANGE_ACTIVITIES_ORDER } from "../actions/actionTypes";

const changeActivitiesOrderReducer = (
  previousState = "activity_creation_time",
  action
) => {
  switch (action.type) {
    case CHANGE_ACTIVITIES_ORDER:
      return action.order;
    default:
      return previousState;
  }
};

export default changeActivitiesOrderReducer;
