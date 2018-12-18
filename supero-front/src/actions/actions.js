import {
  SELECT_ADDRESS,
  FETCH_ACTIVITIES,
  ACTIVITIES_RECEIVED,
  FETCH_ACTIVITY_DETAIL,
  ACTIVITY_DETAIL_RECEIVED,
  FETCH_USER_PROFILE,
  VIEW_USER_PROFILE
} from "./actionTypes";

export const selectAddressAction = address => ({
  type: SELECT_ADDRESS,
  address
});

export const fetchActivitiesAction = () => ({
  type: FETCH_ACTIVITIES
});

export const activitiesReceivedAction = activities => ({
  type: ACTIVITIES_RECEIVED,
  activities
});

export const fetchActivityDetailAction = () => ({
  type: FETCH_ACTIVITY_DETAIL
});

export const activityDetailReceivedAction = activityDetail => ({
  type: ACTIVITY_DETAIL_RECEIVED,
  activityDetail
});

export const fetchUserProfileAction = () => ({
  type: FETCH_USER_PROFILE
});

export const viewUserProfileAction = userProfile => ({
  type: VIEW_USER_PROFILE,
  userProfile
});
