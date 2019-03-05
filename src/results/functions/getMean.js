const getMean = values =>
  values.reduce((prev, cur) => {
    return prev + cur;
  }, 0) / values.length;

export default getMean;
