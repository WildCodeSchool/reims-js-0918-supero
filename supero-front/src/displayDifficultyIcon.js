import React from "react";

const displayDifficultyIcon = difficultyNumber => {
  let icon = <i class="fas fa-bolt" />;
  let icons = [];
  for (let i = 0; i < difficultyNumber; i++) {
    icons = [...icons, icon];
  }
  return icons;
};

export default displayDifficultyIcon;
