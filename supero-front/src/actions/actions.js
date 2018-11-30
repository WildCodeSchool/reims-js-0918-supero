import {
  VIEW_ACTIVITIES_FORM,
  ADD_ACTIVITY,
  VIEW_ACTIVITY_DETAILS,
  VIEW_ACTIVITIES,
  DISPLAY_MENU,
  HIDE_MENU,
  VIEW_NEWS,
  ACTIVITIES_RECEIVED,
  FETCH_ACTIVITIES
} from "./actionTypes";

export const activitiesReceivedAction = activities => ({
  type: ACTIVITIES_RECEIVED,
  activities
});

export const fetchActivitiesAction = () => ({
  type: FETCH_ACTIVITIES
});
