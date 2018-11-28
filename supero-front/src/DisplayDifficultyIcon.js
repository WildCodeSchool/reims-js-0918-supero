import React from "react";

const DisplayDifficultyIcon = props => {
  let icons = [];
  for (let i = 0; i < props.difficulty; i++) {
    let icon = <i key={i} className="fas fa-bolt" />;
    icons = [...icons, icon];
  }
  return icons;
};

export default DisplayDifficultyIcon;
