const createPageTransitions = setPage => {
  const FORM = "FORM";
  const RESULT = "RESULT";

  const next = () => setPage(RESULT);
  const back = () => setPage(FORM);
  const isForm = page => page === undefined || page === FORM;
  const isResult = page => page === RESULT;

  return { next, back, isForm, isResult };
};

export default createPageTransitions;
