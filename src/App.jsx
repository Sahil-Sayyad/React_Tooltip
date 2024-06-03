import { useState } from 'react'
import "./App.css"

const Tooltip = ({ children, position, content }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseOver = () => {
    setShowTooltip(true);
  };

  const handleMouseOut = () => {
    setShowTooltip(false);
  };

  const tooltipStyle = {
    top: position === 'top' ? '-20px' : '',
    bottom: position === 'bottom' ? '-20px' : '',
    left: position === 'left' ? '5px' : '',
    right: position === 'right' ? '5px' : '',
  };

  return (
    <div className="tooltip-container flex justify-center mt-20 p-4 ">
      <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
        className="py-2 px-5 text-sm font-medium text-white focus:outline-none bg-white rounded-[11px] border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-300 dark:bg-gray-100 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
        {children}
      </button>
      {showTooltip && (
        <div className="tooltip a " style={tooltipStyle}>
          {content}
        </div>
      )}
    </div>
  );
};

function App() {

  return (
    <>
      <Tooltip position="top" content="Thanks for hovering! I'm a tooltip">
        Hover over me!

      </Tooltip>

      <Tooltip position="bottom" content="Thanks for hovering! I'm a tooltip">
        Hover over me!

      </Tooltip>

      <Tooltip position="left" content="Thanks for hovering! I'm a tooltip">
        Hover over me!

      </Tooltip>

      <Tooltip position="right" content="Thanks for hovering! I'm a tooltip">
        Hover over me!
      </Tooltip>
    </>
  )
}

export default App
