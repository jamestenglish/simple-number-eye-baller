import getMean from "./getMean";
const getStandardDevation = values => {
  const mean = getMean(values);
  const squaredDifferencesValues = values.map(value =>
    Math.pow(value - mean, 2)
  );
  const squaredDifferenceMean = getMean(squaredDifferencesValues);
  return Math.sqrt(squaredDifferenceMean / values.length);
};

export default getStandardDevation;
