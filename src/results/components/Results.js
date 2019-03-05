import React, { useState } from "react";
import Slider from "rc-slider/lib/Slider";
import "rc-slider/assets/index.css";
import debounce from "debounce";

import "../style/result.css";
import getMean from "../functions/getMean";
import getStandardDeviation from "../functions/getStandardDeviation";
import EyeBallTable from "./EyeBallTable";

const Results = ({ back, results }) => {
  const [filteredResults, setFilteredResults] = useState(results);
  const costs = results.map(({ cost }) => cost);
  const meanCost = getMean(costs);
  const standardDeviation = getStandardDeviation(costs);
  const onChange = debounce(
    value => {
      if (value === 0) {
        setFilteredResults(results);
      }
      const inverseValue = value; //6 - value;
      const filterBounds = inverseValue * standardDeviation;
      const lowerBound = meanCost - filterBounds;
      const upperBound = meanCost + filterBounds;

      const newResults = results.filter(result => {
        const { cost } = result;
        return cost <= lowerBound || cost >= upperBound;
      });
      setFilteredResults(newResults);
    },
    100,
    true
  );
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

      <div className="row">
        <EyeBallTable results={filteredResults} />
      </div>
      <div className="row justify-content-start">
        <div className="col-auto">
          <button className="btn  text-mono  btn-lg btn-outline-danger">
            Back
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Results;
