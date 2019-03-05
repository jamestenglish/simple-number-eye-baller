import React from "react";
import classNames from "classnames";

const TextFieldAdapter = ({ input, meta, ...rest }) => {
  const { label, inputClass, ...passthrough } = rest;
  const displayError = meta.error && meta.touched;
  return (
    <div className="form-group">
      {label && <label htmlFor={input.name}>{label}</label>}
      <textarea
        {...input}
        {...passthrough}
        className={classNames("form-control", inputClass, {
          "is-invalid": displayError
        })}
        rows="10"
        id={input.name}
      />
      {displayError && <div className="invalid-feedback">> {meta.error}</div>}
    </div>
  );
};

export default TextFieldAdapter;
