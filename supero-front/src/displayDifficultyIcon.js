import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBolt } from "@fortawesome/free-solid-svg-icons";

library.add(faBolt);

const displayDifficultyIcon = difficultyNumber => {
  let icons = [];
  for (let i = 0; i < difficultyNumber; i++) {
    icons = [...icons, <FontAwesomeIcon icon="bolt" />];
  }
  console.log(icons);
  return icons;
};

export default displayDifficultyIcon;
