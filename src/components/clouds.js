import React from "react";

import cloudsDark from "../assets/images/clouds-dark.svg";
import cloudsBlue from "../assets/images/clouds-blue.svg";
import cloudsWhite from "../assets/images/clouds-white.svg";

class Clouds extends React.Component {
  render() {
    return (
      <div className="clouds">
        <img src={cloudsDark} alt="Dark clouds" className="clouds-dark" />
        <img src={cloudsBlue} alt="Blue clouds" className="clouds-blue" />
        <img src={cloudsWhite} alt="White clouds" className="clouds-white" />
      </div>
    );
  }
}

export default Clouds;
