import {
  SELECT_ADDRESS,
  FETCH_ACTIVITIES,
  ACTIVITIES_RECEIVED,
  FETCH_ACTIVITY_DETAIL,
  ACTIVITY_DETAIL_RECEIVED,
  FETCH_USER_PROFILE,
  VIEW_USER_PROFILE
} from "./actionTypes";

import {
  selectAddressAction,
  fetchActivitiesAction,
  activitiesReceivedAction,
  fetchActivityDetailAction,
  activityDetailReceivedAction,
  fetchUserProfileAction,
  viewUserProfileAction
} from "./actions";

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

describe("fetchActivitiesAction", () => {
  it("should return a FETCH_ACTIVITIES action", () => {
    const expected = {
      type: FETCH_ACTIVITIES
    };
    expect(fetchActivitiesAction()).toEqual(expected);
  });
});

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

describe("fetchActivityDetailAction", () => {
  it("should return a FETCH_ACTIVITY_DETAIL action", () => {
    const expected = {
      type: FETCH_ACTIVITY_DETAIL
    };
    expect(fetchActivityDetailAction()).toEqual(expected);
  });
});

describe("activityDetailReceivedAction", () => {
  it("should return ACTIVITY_DETAIL_RECEIVED action type and an object", () => {
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

describe("fetchUserProfileAction", () => {
  it("should return a FETCH_USER_PROFILE action", () => {
    const expected = {
      type: FETCH_USER_PROFILE
    };
    expect(fetchUserProfileAction()).toEqual(expected);
  });
});

describe("viewUserProfileAction", () => {
  it("should return VIEW_USER_PROFILE action type and an object", () => {
    const viewUserProfile = {
      user_id: 1,
      user_lastname: "Niveau",
      user_firstname: "Benoît",
      user_gender: "Homme",
      user_pseudo: "Benoit1521",
      user_birthdate: "1980-10-07",
      user_email: "zertyuio@hotmail.fr",
      user_password: "tutjyujt",
      user_photo:
        "https://kawacke.github.io/Projet-1-LeBookDesWilders/photos/Benoit300.jpg",
      user_level: "3",
      user_about: "La première phrase qui me vient en tête"
    };
    const expected = {
      type: VIEW_USER_PROFILE,
      viewUserProfile
    };
    expect(viewUserProfileAction(viewUserProfile)).toEqual(expected);
  });
});
