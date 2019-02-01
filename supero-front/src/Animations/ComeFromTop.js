import React from "react";
import { Spring } from "react-spring";

const ComeFromTop = ({ children, delay }) => {
  return (
    <Spring
      config={{ delay: delay }}
      from={{ opacity: 0, transform: "translate3d(0,-100px,0)" }}
      to={{ opacity: 1, transform: "translate3d(0,0,0)" }}
    >
      {props => <div style={props}>{children}</div>}
    </Spring>
  );
};

export default ComeFromTop;
