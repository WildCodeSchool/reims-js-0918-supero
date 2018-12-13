import {
  FETCH_ACTIVITIES,
  ACTIVITIES_RECEIVED,
  FETCH_ACTIVITY_DETAIL,
  ACTIVITY_DETAIL_RECEIVED,
  FETCH_USER_PROFILE,
  VIEW_USER_PROFILE
} from "../actions/actionTypes";

const loadingReducer = (previousState = false, action) => {
  switch (action.type) {
    case FETCH_ACTIVITIES:
      return true;
    case ACTIVITIES_RECEIVED:
      return false;
    case FETCH_ACTIVITY_DETAIL:
      return true;
    case ACTIVITY_DETAIL_RECEIVED:
      return false;
    case FETCH_USER_PROFILE:
      return true;
    case VIEW_USER_PROFILE:
      return false;
    default:
      return previousState;
  }
};

export default loadingReducer;
