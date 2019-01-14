import React from "react";
import { Spring } from "react-spring";

const BounceEffect = ({ children, delay }) => {
  return (
    <Spring
      config={{ tension: 140, friction: 8, velocity: 30 }}
      from={{ transform: "scale(0.8)" }}
      to={{ transform: "scale(1)" }}
    >
      {props => <div style={props}>{children}</div>}
    </Spring>
  );
};

export default BounceEffect;
