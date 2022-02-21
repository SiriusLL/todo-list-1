import React from "react";

function Button({ label }) {
  return (
    <button className="form-button" type="submit" value="submit">
      {label}
    </button>
  );
}

export default Button;
