import React, { useState, useRef } from "react";

const ColorChooser = function () {
    //* State variables
    const [bgColor, setBgColor] = useState("black")
    //*References
  const wrapperRef = useRef(null);
  const handleOnChange = function (e) {
    setBgColor(e.target.value)
  };
  return (
    <label
      ref={wrapperRef}
      id="color-chooser-wrapper"
      style={{ backgroundColor: bgColor }}
    >
      <input
        onChange={handleOnChange}
        id="color-chooser"
        type="color"
      />
    </label>
  );
};
export default ColorChooser;
