import React, { useState, useEffect } from 'react';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  // Track mouse movement
  const updateMousePosition = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  // Handle mouse click state
  const handleMouseDown = () => {
    setIsClicking(true);
  };

  const handleMouseUp = () => {
    setIsClicking(false);
  };

  // Handle button hover state
  const handleMouseEnter = () => {
    setButtonHovered(true);
  };

  const handleMouseLeave = () => {
    setButtonHovered(false);
  };

  // Add event listeners for mouse movement and click
  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Custom Cursor Style */}
      <style>{`
        #cursor {
          position: absolute;
          background-color: ${isClicking ? 'crimson' : 'crimson'};
          height: 10px;
          width: 10px;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          transition: background-color 0.2s ease;
          z-index: 9999;
        }

        #cursor-border {
          position: absolute;
          width: 50px;
          height: 50px;
          background-color: transparent;
          border: 3px solid ${buttonHovered ? 'red' : '#fff'};
          border-radius: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          transition: all 0.2s ease-out;
          z-index: 9998;
        }
      `}</style>

      {/* Inner cursor circle */}
      <div
        id="cursor"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />

      {/* Outer cursor circle */}
      <div
        id="cursor-border"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />
    </>
  );
};
