import "./App.css";
import { useState } from "react";

// Tooltip component for when the button hover over then it simply shows tooltip info.
const Tooltip = ({ position = "top" }) => {
  const [mouseOver, setMouseOver] = useState(false);

  const handleMouseOver = () => {
    setMouseOver(true);
  };

  const handleMouseOut = () => {
    setMouseOver(false);
  };

  const toolTipStyle = {
    top: position === "top" ? "230px" : "",
    bottom: position === "bottom" ? "29rem" : "",
    left: position === "left" ? "22rem" : "",
    right: position === "right" ? "230px" : "",
  };

  return (
    <>
      <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        Hover over me!
      </button>
      {mouseOver && (
        <div className="tooltip" style={toolTipStyle}>
          Thanks for hovering! I'm a tooltip
        </div>
      )}
    </>
  );
};

// Main app 
export default function App() {
  return (
    <>
      <div className="App">
        {/* here you can pass 'top' ,'right', 'left', 'bottom' for see the diffrent position of tooltip. */}
        <Tooltip position="top" />
      </div>
    </>
  );
}
