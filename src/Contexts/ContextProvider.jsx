import { useState, createContext, useRef } from "react";
export const strokeColorContext = createContext(null);
export const strokeWidthContext = createContext(null);
export const clearBtnContext = createContext(null);
const ContextProvider = ({ children }) => {
  //*Create Contexts
  //*State Variable
  const [strokeColor, setStrokeColor] = useState("black");
  const [strokeWidth, setStrokeWidth] = useState("1");
  const clearBtnRef = useRef(null);

  return (
    <strokeColorContext.Provider value={{ strokeColor, setStrokeColor }}>
      <strokeWidthContext.Provider value={{ strokeWidth, setStrokeWidth }}>
        <clearBtnContext.Provider value={clearBtnRef}>
          {children}
        </clearBtnContext.Provider>
      </strokeWidthContext.Provider>
    </strokeColorContext.Provider>
  );
};
export default ContextProvider;
