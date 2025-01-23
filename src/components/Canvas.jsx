import React, { useContext,useState, useRef, useEffect } from "react";
import { strokeColorContext,strokeWidthContext,clearBtnContext } from "../Contexts/ContextProvider";


const Canvas = () => {
  //*REFERENCE
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  //*STATE
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });
  //*CONTEXT
  const { strokeColor } = useContext(strokeColorContext);
  const {strokeWidth} = useContext(strokeWidthContext)
  const clearBtnRef=useContext(clearBtnContext)
  useEffect(() => {
    function updateDimensions() {
      const container = containerRef.current;

      const width =
        container.offsetWidth - parseInt(container.style.padding) * 16 * 2;
      const height =
        container.offsetHeight - parseInt(container.style.padding) * 16 * 2;
      setDimensions({ width, height });
    }

    updateDimensions();
    
    window.addEventListener("resize", updateDimensions);
  }, []);
  const handleMouseDown = (e) => {
    const canvas = canvasRef.current;
    let ctx = canvas.getContext("2d");

    const offsetX = e.target.offsetLeft;
    const offsetY = e.target.offsetTop;

    ctx.beginPath();
    ctx.moveTo(e.clientX - offsetX, e.clientY - offsetY);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    clearBtnRef.current.addEventListener("click",()=>{
      ctx.clearRect(0,0,canvas.width,canvas.height)
    })


    function handleMouseMove(e) {
      ctx.lineTo(e.clientX - offsetX, e.clientY - offsetY);
      ctx.strokeStyle = strokeColor
      ctx.lineWidth = strokeWidth
      ctx.lineCap = "round"
      ctx.stroke();
    }
    function handleMouseUp() {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
  };

  return (
    <section
      ref={containerRef}
      style={{ height: "100%", width: "90%", padding: "0" }}
      id="canvas-container"
    >
      <canvas
        id="canvas"
        ref={canvasRef}
        height={dimensions.height}
        width={dimensions.width}
        onMouseDown={handleMouseDown}
      ></canvas>
    </section>
  );
};
export default Canvas;