import React, { useContext,useState, useRef, useEffect } from "react";
import { strokeColorContext,strokeWidthContext } from "../Contexts/ContextProvider";


const Canvas = () => {
  //*REFERENCE
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  //*STATE
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });
  //*CONTEXT
  const { strokeColor } = useContext(strokeColorContext);
  const {strokeWidth} = useContext(strokeWidthContext)
  console.log(strokeColor,strokeWidth)
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

//!_---------------------
// import React, { useState, useRef, useEffect } from "react";

// const Canvas = () => {
//   const canvasRef = useRef(null);
//   const [dimensions, setDimensions] = useState({ height: 0, width: 0 });

//   useEffect(() => {
//     const updateCanvasDimensions = () => {
//       const canvas = canvasRef.current;
//       if (canvas) {
//         const { width, height } = canvas.getBoundingClientRect();
//         setDimensions({ width, height });
//       }
//     };

//     // Set initial dimensions
//     updateCanvasDimensions();

//     // Update dimensions on window resize
//     window.addEventListener("resize", updateCanvasDimensions);

//     return () => {
//       window.removeEventListener("resize", updateCanvasDimensions);
//     };
//   }, []);

//   const handleMouseDown = (e) => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     const rect = canvas.getBoundingClientRect();
//     const offsetX = rect.left;
//     const offsetY = rect.top;

//     ctx.beginPath();
//     ctx.moveTo(e.clientX - offsetX, e.clientY - offsetY);

//     const handleMouseMove = (e) => {
//       ctx.lineTo(e.clientX - offsetX, e.clientY - offsetY);
//       ctx.stroke();
//     };

//     const handleMouseUp = () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };

//     // Attach event listeners to the window for mousemove and mouseup
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseup", handleMouseUp);
//   };

//   return (
// <section
//   id="canvas-container"
//   style={{ position: "relative", height: "100%", width: "100%" }}
// >
//   <canvas
//     ref={canvasRef}
//     width={dimensions.width}
//     height={dimensions.height}
//     onMouseDown={handleMouseDown}
//     style={{
//       border: "1px solid black",
//       width: "100%",
//       height: "100%",
//     }}
//     id="canvas"
//   ></canvas>
// </section>
//   );
// };

// export default Canvas;
