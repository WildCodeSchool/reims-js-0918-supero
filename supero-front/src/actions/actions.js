import {
  SELECT_ADDRESS,
  FETCH_ACTIVITIES,
  ACTIVITIES_RECEIVED,
  FETCH_ACTIVITY_DETAIL,
  ACTIVITY_DETAIL_RECEIVED,
  FETCH_USER_PROFILE,
  VIEW_USER_PROFILE,
  CHANGE_ACTIVE_PAGE
} from "./actionTypes";

export const selectAddressAction = address => ({
  type: SELECT_ADDRESS,
  address
});

export const fetchActivitiesAction = () => ({
  type: FETCH_ACTIVITIES
});

export const activitiesReceivedAction = result => ({
  type: ACTIVITIES_RECEIVED,
  activities: result.activities,
  activitiesTotal: result.activitiesTotal
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

export const changeActivePageAction = page => ({
  type: CHANGE_ACTIVE_PAGE,
  page
});
