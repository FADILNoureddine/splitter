import React, { useState, useEffect } from 'react';
import Tables from './components/Tables';
import Tabs from './components/Tabs';

const Splitter = () => {
  const [isResizing, setIsResizing] = useState(false);
  const [containerWidth, setContainerWidth] = useState(window.innerWidth * 0.45);
  const [initialMouseX, setInitialMouseX] = useState(null);
  const [initialContainerWidth, setInitialContainerWidth] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isResizing) {
        const dx = e.clientX - initialMouseX;
        const newContainerWidth = initialContainerWidth + dx;

        if (newContainerWidth >= 0 && newContainerWidth <= window.innerWidth) {
          setContainerWidth(newContainerWidth);
        }
      }
    };

    const handleMouseUp = () => {
      if (isResizing) {
        setIsResizing(false);
      }
    };

    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing, initialMouseX, initialContainerWidth]);

  const handleMouseDown = (e) => {
    setIsResizing(true);
    setInitialMouseX(e.clientX);
    setInitialContainerWidth(containerWidth);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-sky-200" style={{ width: `${containerWidth}px` }}>
        Left Pane
      </div>
      <div
        className="w-2 bg-white cursor-w-resize"
        onMouseDown={handleMouseDown}
      >
        &nbsp;
      </div>
      <div className="overflow-auto">
<div className="flex-1 bg-neutral-200 ">
  <Tables />
</div>
<div>
  <Tabs />
</div>
</div>
    </div>
  );
};

export default Splitter;

