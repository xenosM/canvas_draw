import React, { useState } from "react";
const SizeSlider = function () {
  const [sizeValue, setSizeValue] = useState(1);
  const handleOnChange = function(e){
    setSizeValue(e.target.value)
  }
  return (
    <label id="size-slider-wrapper">
      <input id="size-slider" type="range" min={1} max={30} value={sizeValue} onChange={handleOnChange} />
      <span>{sizeValue} px</span>
    </label>
  );
};
export default SizeSlider;
