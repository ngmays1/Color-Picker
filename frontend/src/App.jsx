import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorMatchGame from './components/ColorMatchGame';
import ColorSlider from './components/ColorSlider';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ColorSlider />
    </div>
  );
}

export default App;
