import {
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

export const fetchActivityDetailAction = () => ({
  type: FETCH_ACTIVITY_DETAIL
});

export const activityDetailReceivedAction = activityDetail => ({
  type: ACTIVITY_DETAIL_RECEIVED,
  activityDetail
});
