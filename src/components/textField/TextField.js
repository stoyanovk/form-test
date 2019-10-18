import React, { useState, useEffect } from "react";
import { StyledLabel, AreaStyled, ErrMessage } from "./style";

export default function TextField({
  value,
  inputLabel,
  placeholder,
  name,
  required,
  textArea,
  handleChange,
  checkFunc,
  isError,
  setErrors
}) {
  const [err, setErr] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  useEffect(() => {
    isError && setErrMessage("required fields must be filled");
  }, [isError]);
  const handleChangeVal = ({ target }) => {
    setErrMessage("");
    setErr(false);
    handleChange(target);
    setErrors &&
      setErrors(errors => {
        const newErrors = errors.filter(error => error !== name);

        return [...newErrors];
      });
  };
  const handleCheck = () => {
    if (checkFunc !== undefined) {
      !checkFunc(value)&&setErrors((errors => {
        return [...errors,name];
      }))
      setErr(!checkFunc(value));

    }
  };
  let clsName = "form-control w-100 mt-2";

  if (err || isError) {
    clsName += " is-invalid";
  }

  if (textArea) {
    return (
      <div className="form-group w-100">
        <StyledLabel>
          {inputLabel}
          {required ? <span className="text-danger">*</span> : null}
          <AreaStyled
            className={clsName}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={handleChangeVal}
            onBlur={handleCheck}
          ></AreaStyled>
          <ErrMessage className="form-text">{errMessage}</ErrMessage>
        </StyledLabel>
      </div>
    );
  }
  return (
    <div className="form-group w-100">
      <StyledLabel>
        {inputLabel}
        {required ? <span className="text-danger">*</span> : null}
        <input
          type="text"
          name={name}
          className={clsName}
          placeholder={placeholder}
          value={value}
          onChange={handleChangeVal}
          onBlur={handleCheck}
        />
      </StyledLabel>
      <ErrMessage className="form-text">{errMessage}</ErrMessage>
    </div>
  );
}
