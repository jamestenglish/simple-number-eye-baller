import parse from "csv-parse/lib/sync";

import costParser from "../parsers/costParser";

const csvValidator = value => {
  if (value) {
    try {
      const result = parse(value, { skip_empty_lines: true });
      if (result[0].length !== 2) {
        return "The instructions say two columns, dumbass";
      }

      for (let i = 0; i < result.length; i++) {
        const strippedCost = costParser(result[i][1]);
        if (isNaN(strippedCost)) {
          return "Generally, cost is a number. This insight might just be the tipping point to turn your pathetic existence around. I doubt it.";
        }
      }

      if (result.length < 20) {
        return "Come on, you need like at least 20 rows to get a good eye balling";
      }
    } catch (error) {
      return "Invalid CSV";
    }
    return undefined;
  }
  return "Required";
};

export default csvValidator;
