import React, { useState, useEffect, useRef} from "react";

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return { r, g, b };
};

const TargetColor = () => {
  const [color, setColor] = useState(getRandomColor());

  const rgbString = `rgb(${color.r}, ${color.g}, ${color.b})`;

  const canvasRef = useRef(null);

const ctx = canvasRef.current?.getContext("2d");
ctx.fillStyle = rgbString;
ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  return (
    <div className="p-4 space-y-4">

      <div className="h-24 rounded-xl" style={{ backgroundColor: rgbString }} />
    </div>
  );
};

export default TargetColor;
