import React, { useState } from "react";

import createPageTransitions from "../functions/pageTransitions";
import GatherNumbersForm from "../../gather-numbers/components/GatherNumbersForm";
import Results from "../../results/components/Results";

const MainPage = () => {
  const [page, setPage] = useState();
  const [results, setResults] = useState([]);
  const { next, back, isForm, isResult } = createPageTransitions(setPage);
  return (
    <React.Fragment>
      {isForm(page) && (
        <GatherNumbersForm next={next} setResults={setResults} />
      )}
      {isResult(page) && <Results back={back} results={results} />}
    </React.Fragment>
  );
};

export default MainPage;
