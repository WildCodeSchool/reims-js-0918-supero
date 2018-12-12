import {
  VIEW_ACTIVITIES_FORM,
  ADD_ACTIVITY,
  VIEW_ACTIVITY_DETAILS,
  VIEW_ACTIVITIES,
  DISPLAY_MENU,
  HIDE_MENU,
  VIEW_NEWS,
  ACTIVITIES_RECEIVED,
  FETCH_ACTIVITIES,
  SELECT_ADDRESS,
  ACTIVITY_DETAIL_RECEIVED,
  FETCH_ACTIVITY_DETAIL
} from "./actionTypes";

import {
  addActivityAction,
  activitiesReceivedAction,
  fetchActivitiesAction,
  selectAddressAction,
  fetchActivityDetailAction,
  activityDetailReceivedAction
} from "./actions";

describe("activitiesReceivedAction", () => {
  it("should return ACTIVITIES_RECEIVED action type and an array", () => {
    const activities = [
      {
        activity_id: 1,
        sports_id: 1,
        creator_id: 1,
        sport_name: "running",
        user_name: "Benoit",
        activity_difficulty: 3,
        activity_description: "Yolo",
        activity_adresse: "31 rue de lorem ipsum",
        activity_city: "lorem ipsum",
        activity_latitude: "35.123.78",
        activity_longitude: "654151651",
        activity_start_time: "05/12/18",
        activity_duration: 2,
        activity_photo: "image.png",
        activity_max_participants: 5,
        activity_creation_time: "01/12/18"
      },
      {
        activity_id: 1,
        sports_id: 1,
        creator_id: 1,
        sport_name: "running",
        user_name: "Benoit",
        activity_difficulty: 3,
        activity_description: "Yolo",
        activity_adresse: "31 rue de lorem ipsum",
        activity_city: "lorem ipsum",
        activity_latitude: "35.123.78",
        activity_longitude: "654151651",
        activity_start_time: "05/12/18",
        activity_duration: 2,
        activity_photo: "image.png",
        activity_max_participants: 5,
        activity_creation_time: "01/12/18"
      }
    ];
    const expected = {
      type: ACTIVITIES_RECEIVED,
      activities
    };
    expect(activitiesReceivedAction(activities)).toEqual(expected);
  });
});

describe("fetchActivitiesAction", () => {
  it("should return a FETCH_ACTIVITIES action", () => {
    const expected = {
      type: FETCH_ACTIVITIES
    };
    expect(fetchActivitiesAction()).toEqual(expected);
  });
});

describe("selectAdressAction", () => {
  it("should return a adress object", () => {
    const address = {
      label: "Reims, Marne, Grand Est, France métropolitaine, 51100, France",
      x: "4.031926",
      y: "49.2577886"
    };
    const expected = {
      type: SELECT_ADDRESS,
      address
    };
    expect(selectAddressAction(address)).toEqual(expected);
  });
});

describe("fetchActivityDetailAction", () => {
  it("should return a FETCH_ACTIVITY_DETAIL action", () => {
    const id = 5;
    const expected = {
      type: FETCH_ACTIVITY_DETAIL,
      id
    };
    expect(fetchActivityDetailAction(id)).toEqual(expected);
  });
});

describe("activityDetailReceivedAction", () => {
  it("should return ACTIVITY_DETAIL_RECEIVED action type and an array", () => {
    const activityDetail = {
      activity_id: 1,
      sports_id: 1,
      creator_id: 1,
      sport_name: "running",
      user_name: "Benoit",
      activity_difficulty: 3,
      activity_description: "Yolo",
      activity_adresse: "31 rue de lorem ipsum",
      activity_city: "lorem ipsum",
      activity_latitude: "35.123.78",
      activity_longitude: "654151651",
      activity_start_time: "05/12/18",
      activity_duration: 2,
      activity_photo: "image.png",
      activity_max_participants: 5,
      activity_creation_time: "01/12/18"
    };
    const expected = {
      type: ACTIVITY_DETAIL_RECEIVED,
      activityDetail
    };
    expect(activityDetailReceivedAction(activityDetail)).toEqual(expected);
  });
});
