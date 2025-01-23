import { useState,createContext } from "react"
export const strokeColorContext = createContext(null)
export const strokeWidthContext = createContext(null)
const ContextProvider = ({children})=>{
    //*Create Contexts
    //*State Variable
    const [strokeColor,setStrokeColor] = useState('black')
    const [strokeWidth,setStrokeWidth] = useState('1')
    return(
        <strokeColorContext.Provider value={{strokeColor,setStrokeColor}}>
            <strokeWidthContext.Provider value={{strokeWidth,setStrokeWidth}}>
                {children}
            </strokeWidthContext.Provider>
        </strokeColorContext.Provider>
    )
    
}
export default ContextProvider