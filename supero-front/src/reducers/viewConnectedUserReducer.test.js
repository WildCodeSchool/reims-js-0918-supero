import viewConnectedUserReducer from "./viewConnectedUserReducer";

import { CONNECTED_USER_RECEIVED } from "../actions/actionTypes";

describe("viewConnectedUserReducer", () => {
  it("handles CONNECTED_USER_RECEIVED action", () => {
    const fakeState = [];
    const action = {
      type: CONNECTED_USER_RECEIVED,
      connectedUser: [
        {
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
        }
      ]
    };
    const expected = [
      {
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
      }
    ];
    expect(viewConnectedUserReducer(fakeState, action)).toEqual(expected);
  });
});
