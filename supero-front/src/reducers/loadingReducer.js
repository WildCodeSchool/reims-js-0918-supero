import {
  ACTIVITIES_RECEIVED,
  FETCH_ACTIVITIES,
  ACTIVITY_DETAIL_RECEIVED,
  FETCH_ACTIVITY_DETAIL
} from "../actions/actionTypes";

const loadingReducer = (previousState = false, action) => {
  switch (action.type) {
    case ACTIVITIES_RECEIVED:
      return false;
    case ACTIVITY_DETAIL_RECEIVED:
      return false;
    case FETCH_ACTIVITIES:
      return true;
    case FETCH_ACTIVITY_DETAIL:
      return true;
    default:
      return previousState;
  }
};

export default loadingReducer;
