import React, { useState } from "react";
import "rc-slider/assets/index.css";
import debounce from "debounce";

import "../style/result.css";
import getMean from "../functions/getMean";
import getStandardDeviation from "../functions/getStandardDeviation";
import EyeBallTable from "./EyeBallTable";
import SquintLevel from "./SquintLeve";

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
      <SquintLevel onChange={onChange} />
      <div className="row">
        <EyeBallTable results={filteredResults} />
      </div>
      <div className="row justify-content-start">
        <div className="col-auto">
          <button
            className="btn  text-mono  btn-lg btn-outline-danger"
            onClick={back}
          >
            Back
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Results;
