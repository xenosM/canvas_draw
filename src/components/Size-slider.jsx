import React, { useState,useContext } from "react";
import { strokeWidthContext } from "../Contexts/ContextProvider";


const SizeSlider = function () {
  //*State Variable
  const [sizeValue, setSizeValue] = useState(1);
  //*Context 
  const {setStrokeWidth} = useContext(strokeWidthContext) 
  
  const handleOnChange = function(e){
    setSizeValue(e.target.value)
    setStrokeWidth(e.target.value)
  }
  return (
    <label id="size-slider-wrapper">
      <input id="size-slider" type="range" min={1} max={50} value={sizeValue} onChange={handleOnChange} />
      <span>{sizeValue} px</span>
    </label>
  );
};
export default SizeSlider;
