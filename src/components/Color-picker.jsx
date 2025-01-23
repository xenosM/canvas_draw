import React, { useState, useRef, useContext } from "react";
import { strokeColorContext } from "../Contexts/ContextProvider";

const ColorPicker = function () {
  //* State variables
  const [bgColor, setBgColor] = useState("black");
  //*References
  const wrapperRef = useRef(null);
  //*Context
  const {setStrokeColor} = useContext(strokeColorContext)

  //*Event Listeners
  const handleOnChange = function (e) {
    setBgColor(e.target.value);
    setStrokeColor(e.target.value)
  };
  return (
    <label
      ref={wrapperRef}
      id="color-chooser-wrapper"
      style={{ backgroundColor: bgColor }}
    >
      <input onChange={handleOnChange} id="color-chooser" type="color" />
    </label>
  );
};
export default ColorPicker;
