import {
  VIEW_ACTIVITIES_FORM,
  ADD_ACTIVITY,
  VIEW_ACTIVITY_DETAILS,
  VIEW_ACTIVITIES,
  DISPLAY_MENU,
  HIDE_MENU,
  VIEW_NEWS
} from "./actionTypes";

export const addActivityAction = activity => ({
  type: ADD_ACTIVITY,
  ...activity
});
