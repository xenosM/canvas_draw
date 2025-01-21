import React, { useState, useRef, useEffect } from "react";
const Canvas = () => {
  const canvasRef = useRef();
  const [dimensions, setDimensions] = useState({ height: null, width: null });
  let ctx;
  useEffect(() => {
    const canvas = canvasRef.current;

    const { width, height } = canvas.getBoundingClientRect();
    setDimensions({ height, width });
    ctx = canvas.getContext("2d");
    canvas.ctx = ctx;
  }, []);
  const handleMouseDown = (e) => {
    const canvas = canvasRef.current;
    ctx = canvas.ctx;

    const offsetX = e.target.offsetLeft;
    const offsetY = e.target.offsetTop;

    ctx.beginPath();
    ctx.moveTo(e.clientX - offsetX, e.clientY - offsetY);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);
  };
  function handleMouseMove(e) {
    const canvas = canvasRef.current;
    ctx = canvas.ctx;

    const offsetX = e.target.offsetLeft;
    const offsetY = e.target.offsetTop;

    ctx.lineTo(e.clientX - offsetX, e.clientY - offsetY);
    ctx.stroke();
  }
  function handleMouseUp() {
    const canvas = canvasRef.current;
    canvas.removeEventListener("mousemove", handleMouseMove);
    canvas.removeEventListener("mouseup", handleMouseUp);
  }

  return (
    <section id="canvas-container">
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
