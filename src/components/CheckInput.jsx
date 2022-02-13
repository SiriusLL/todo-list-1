import React from "react";

function CheckInput({ task, handleChecked, check, i }) {
  return (
    <input
      className={`${task.checked}`}
      type="checkbox"
      onClick={(e) => handleChecked(e, i)}
      checked={check}
    />
  );
}

export default CheckInput;
