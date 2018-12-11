import {
  // VIEW_ACTIVITIES_FORM,
  // ADD_ACTIVITY,
  // VIEW_ACTIVITY_DETAILS,
  // VIEW_ACTIVITIES,
  // DISPLAY_MENU,
  // HIDE_MENU,
  // VIEW_NEWS,
  ACTIVITIES_RECEIVED,
  FETCH_ACTIVITIES,
  SELECT_ADDRESS,
  ACTIVITY_DETAIL_RECEIVED,
  FETCH_ACTIVITY_DETAIL
} from "./actionTypes";

export const activitiesReceivedAction = activities => ({
  type: ACTIVITIES_RECEIVED,
  activities
});

export const fetchActivitiesAction = () => ({
  type: FETCH_ACTIVITIES
});

export const selectAddressAction = address => ({
  type: SELECT_ADDRESS,
  address
});

export const fetchActivityDetailAction= () => ({
  type: FETCH_ACTIVITY_DETAIL
});

export const activityDetailReceivedAction = () => ({
  type: ACTIVITY_DETAIL_RECEIVED
});

