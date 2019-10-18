import React, { useState, useEffect } from "react";
import { StyledForm } from "./style";
import TextField from "../textField";
import FileInput from "../fileInput";
import { checkOnEmpty, checkStrOnRegExp } from "../../utils";
const initialState = {
  name: "",
  number: "",
  business: "",
  description: "",
  file: {}
};

export default function Form() {
  const [state, setState] = useState(initialState);
  const [errors, setErrors] = useState([]);

  const { number, name, business, description } = state;
  const handleChange = ({ name, value }) => {
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const isValidateField = () => {
    let syncErr = [];
    const { name, ...rest } = state

    for (let key in rest) {
      syncErr.push();
      if (state[key] === "") {
        syncErr.push(key);
        setErrors(prevState => [...prevState, key]);
      }
    }

    return setErrors
  }

  const handleSubmit = async e => {
    e.preventDefault();

    let syncErr = isValidateField()
    
    (syncErr.length === 0 && errors.length === 0 )&& console.log(state);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-12 col-md-7">
          <TextField
            inputLabel="Your company name"
            placeholder="Type text"
            name="name"
            handleChange={handleChange}
            value={name}
          />
        </div>
        <div className="col-12  col-md-5">
          <TextField
            inputLabel="Number of people"
            placeholder="1-99"
            name="number"
            required={true}
            handleChange={handleChange}
            checkFunc={checkStrOnRegExp}
            value={number}
            isError={errors.includes("number")}
            setErrors={setErrors}
          />
        </div>
        <div className="col-12">
          <TextField
            inputLabel="Business area"
            placeholder="Design, Marketing, Development, etc."
            name="business"
            required={true}
            handleChange={handleChange}
            checkFunc={checkOnEmpty}
            value={business}
            isError={errors.includes("business")}
            setErrors={setErrors}
          />
        </div>
        <div className="col-12 ">
          <TextField
            inputLabel="Description"
            placeholder="Type text"
            name="description"
            required={true}
            textArea={true}
            handleChange={handleChange}
            checkFunc={checkOnEmpty}
            value={description}
            isError={errors.includes("description")}
            setErrors={setErrors}
          />
        </div>
        <div className="col-12 ">
          <FileInput
            name="file"
            inputLabel="Add file "
            handleChange={handleChange}
          />
        </div>
        <div className="col-12 ">
          <button className="btn btn-danger mt-3 px-4 py-3">Submit</button>
        </div>
      </div>
    </StyledForm>
  );
}
