import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBolt } from "@fortawesome/free-solid-svg-icons";

library.add(faBolt);

const displayDifficultyIcon = difficultyNumber => {
  const icons = [];
  for (let i = 0; i < difficultyNumber; i++) {}
};

export default displayDifficultyIcon;
