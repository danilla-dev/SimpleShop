import React from "react";
import rickImage from "../images/rick-welcome.png";
const HelloRick = () => {
  const style = {
    position: "absolute",
    width: 400,
    height: 200,
    top: -90,
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  return <img className="rick-welcome" style={style} src={rickImage} alt="" />;
};

export default HelloRick;
