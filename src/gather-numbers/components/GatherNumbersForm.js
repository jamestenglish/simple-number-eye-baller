import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Form, Field } from "react-final-form";
import className from "classnames";
import parse from "csv-parse/lib/sync";

import TextFieldAdapter from "../../form/components/TextFieldAdapter";
import csvValidator from "../../form/validators/csvValidator";
import costParser from "../../form/parsers/costParser";

const GatherNumbersForm = ({ next, setResults }) => {
  const onSubmit = async values => {
    const { csvInput } = values;
    const csv = parse(csvInput, { skip_empty_lines: true });
    const results = csv.map((value, index) => {
      return {
        key: index,
        id: value[0],
        cost: parseFloat(costParser(value[1]))
      };
    });
    setResults(results);
    next();
  };
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, pristine, invalid }) => {
        const disabled = pristine || invalid;
        return (
          <form onSubmit={handleSubmit}>
            <Field
              name="csvInput"
              component={TextFieldAdapter}
              validate={csvValidator}
              label={
                <span className="text-success">
                  Enter CSV as <span className="text-muted">Id</span>,{" "}
                  <span className="text-muted">Cost</span>
                </span>
              }
              inputClass="text-success"
            />
            <div className="row justify-content-end">
              <div className="col-auto">
                <button
                  disabled={disabled}
                  type="submit"
                  className={className("btn  text-mono  btn-lg", {
                    "btn-shadow": !disabled,
                    "btn-outline-success": !disabled,
                    "btn-block": disabled,
                    "btn-primary": disabled
                  })}
                >
                  <FontAwesomeIcon icon="search" /> Eye Ball It!
                </button>
              </div>
            </div>
          </form>
        );
      }}
    />
  );
};

export default GatherNumbersForm;
