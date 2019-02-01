import loadingReducer from "./loadingReducer";

import {
  fetchActivitiesAction,
  activitiesReceivedAction,
  fetchActivityDetailAction,
  activityDetailReceivedAction,
  fetchUserProfileAction,
  viewUserProfileAction
} from "../actions/actions";

describe("loadingReducer", () => {
  it("handles FETCH_ACTIVITIES action", () => {
    const fakeState = false;
    expect(loadingReducer(fakeState, fetchActivitiesAction())).toEqual(true);
  });
  it("handles ACTIVITIES_RECEIVED action", () => {
    const fakeState = true;
    expect(loadingReducer(fakeState, activitiesReceivedAction([]))).toEqual(
      false
    );
  });
});

describe("loadingReducer", () => {
  it("handles FETCH_ACTIVITY_DETAIL action", () => {
    const fakeState = false;
    expect(loadingReducer(fakeState, fetchActivityDetailAction())).toEqual(
      true
    );
  });
  it("handles ACTIVITY_DETAIL_RECEIVED action", () => {
    const fakeState = true;
    expect(loadingReducer(fakeState, activityDetailReceivedAction([]))).toEqual(
      false
    );
  });
});

describe("loadingReducer", () => {
  it("handles FETCH_USER_PROFILE action", () => {
    const fakeState = false;
    expect(loadingReducer(fakeState, fetchUserProfileAction())).toEqual(true);
  });
  it("handles VIEW_USER_PROFILE action", () => {
    const fakeState = true;
    expect(loadingReducer(fakeState, viewUserProfileAction([]))).toEqual(false);
  });
});
