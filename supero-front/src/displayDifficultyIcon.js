import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBolt } from "@fortawesome/free-solid-svg-icons";

library.add(faBolt);

const displayDifficultyIcon = difficultyNumber => {
  let icon = <FontAwesomeIcon icon="bolt" />;
  let icons = [];
  for (let i = 0; i < difficultyNumber; i++) {
    icons = [...icons, icon];
  }
  console.log(icons);
  return icons;
};

export default displayDifficultyIcon;
