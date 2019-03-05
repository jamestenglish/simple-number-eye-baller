import React from "react";
import Slider from "rc-slider/lib/Slider";

const SquintLevel = ({ onChange }) => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col text-center">
          <h3>Squint Level</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-auto">
          <h4>Gritty</h4>
        </div>
        <div className="col">
          <Slider min={0} max={10} step={0.001} onChange={onChange} />
        </div>
        <div className="col-md-auto">
          <h4>Mr. Magoo</h4>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SquintLevel;
