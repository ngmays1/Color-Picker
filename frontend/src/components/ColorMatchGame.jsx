import React from "react";
import ColorSlider from "./ColorSlider";
import TargetColor from "./TargetColor";

const ColorMatchGame = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">🎨 Color Match Game</h1>
      <TargetColor />
      <ColorSlider />
    </div>
  );
};

export default ColorMatchGame;
