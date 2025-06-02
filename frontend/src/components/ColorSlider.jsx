import React, { useState, useEffect, useRef } from "react";

const parseColor = (value, fallback) => {
  if (typeof value === 'number') return Math.min(255, Math.max(0, value));
  if (typeof value === 'string') {
    const num = parseInt(value, 10);
    if (!isNaN(num)) return Math.min(255, Math.max(0, num));
  }
  return fallback;
};

const hexToRgb = (hex) => {
  const cleanHex = hex.replace('#', '');
  const bigint = parseInt(cleanHex, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255
  };
};

const ColorSlider = ({ red, green, blue, hex, onChange }) => {
  const initial = hex ? hexToRgb(hex) : {
    r: parseColor(red, 0),
    g: parseColor(green, 0),
    b: parseColor(blue, 0),
  };

  const [r, setR] = useState(initial.r);
  const [g, setG] = useState(initial.g);
  const [b, setB] = useState(initial.b);
  const [showHex, setShowHex] = useState(true);

  const rgbString = `rgb(${r}, ${g}, ${b})`;
  const hexString = `#${((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16)
    .slice(1)
    .toUpperCase()}`;

  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (ctx) {
      ctx.fillStyle = rgbString;
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
    if (onChange) onChange({ r, g, b });
  }, [r, g, b, rgbString, onChange]);

  return (
    <div>
      <div>
      <canvas ref={canvasRef} width={200} height={200} style={{ border: "1px solid #000" }} />
        <button onClick={() => setShowHex(prev => !prev)}>
          {showHex ? "Hide Hex" : "Show Hex"}
        </button>
        {showHex && <div className="text-sm">Hex: {hexString}</div>}
        {/* Sliders remain the same */}
      </div>
      <label>
        R
        <input type="range" min="0" max="255" value={r} onChange={(e) => setR(Number(e.target.value))} />
      </label>
      <label>
        G
        <input type="range" min="0" max="255" value={g} onChange={(e) => setG(Number(e.target.value))} />
      </label>
      <label>
        B
        <input type="range" min="0" max="255" value={b} onChange={(e) => setB(Number(e.target.value))} />
      </label>
    </div>
  );
};

export default ColorSlider;
