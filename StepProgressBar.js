// // StepProgressBar.js
// import React from 'react';
// import { ProgressBar, Step } from 'react-step-progress-bar';

// const StepProgressBar = ({ activeStep, totalSteps }) => {
//   const percent = (activeStep / (totalSteps - 1)) * 100; // Calculate the percentage based on the active step
//   return (
//     <ProgressBar percent={percent} filledBackground="linear-gradient(to right, #fefb72, #f0bb31)">
//       {[...Array(totalSteps)].map((_, index) => (
//         <Step key={index} transition="scale">
//           {({ accomplished }) => (
//             <div style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }} className="text-white">
//               {index + 1}
//             </div>
//           )}
//         </Step>
//       ))}
//     </ProgressBar>
//   );
// };

// export default StepProgressBar;