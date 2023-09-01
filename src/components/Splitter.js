// import React, { useState, useEffect } from 'react';

// export default function Splitter(){
//   const [isResizing, setIsResizing] = useState(false);
//   const [containerWidth, setContainerWidth] = useState(window.innerWidth * 0.45);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (isResizing) {
//         const newContainerWidth = e.clientX;
//         setContainerWidth(newContainerWidth);
//       }
//     };

//     const handleMouseUp = () => {
//       if (isResizing) {
//         setIsResizing(false);
//       }
//     };

//     if (isResizing) {
//       window.addEventListener('mousemove', handleMouseMove);
//       window.addEventListener('mouseup', handleMouseUp);
//     }

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('mouseup', handleMouseUp);
//     };
//   }, [isResizing]);

//   const handleMouseDown = () => {
//     setIsResizing(true);
//   };

//   return (
//     <div className="flex h-screen">
//       <div className="w-1/2 bg-sky-200" style={{ width: `${containerWidth}px` }}>
//         Left Pane
//       </div>
//       <div
//         className="w-2 bg-white cursor-w-resize"
//         onMouseDown={handleMouseDown}
//       >
//         &nbsp;
//       </div>
//       <div className="flex-1 bg-neutral-200">Right Pane</div>
//     </div>
//   );
// };



