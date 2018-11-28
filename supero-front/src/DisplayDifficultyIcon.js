import React from "react";

const DisplayDifficultyIcon = difficultyNumber => {
  let icons = [];
  for (let i = 0; i < difficultyNumber.difficulty; i++) {
    let icon = <i key={i} className="fas fa-bolt" />;
    icons = [...icons, icon];
  }
  return icons;
};

export default DisplayDifficultyIcon;
