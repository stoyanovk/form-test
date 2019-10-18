import React, { useState } from "react";
const initialState = {
  length: "",
  files: {}
};
export default function FileInput({ inputLabel, name, handleChange }) {
  const [state, setState] = useState(initialState);
  const changeValue = ({ target }) => {
    const files = target.files;
    const filesLength = files.length;
    setState(prevState => ({ length: filesLength, files: files }));
  };

  return (
    <div className="custom-file">
      <label className="custom-file-label">
        {inputLabel}
        {state.length&&<span className="ml-2 ml-md-5">{state.length} files attached</span>}
        <input
          type="file"
          name={name}
          onChange={changeValue}
          multiple
          className="custom-file-input"
        />
      </label>
    </div>
  );
}
