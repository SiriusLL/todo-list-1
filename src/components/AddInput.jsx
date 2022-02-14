import React from "react";

function AddInput({ placeholder, name, value, onChange }) {
  return (
    <input
      autoFocus
      className="add-task-input"
      type="text"
      placeholder={placeholder}
      name={name}
      onChange={(e) => onChange(e.target.value)}
      value={value}
    />
  );
}

export default AddInput;
