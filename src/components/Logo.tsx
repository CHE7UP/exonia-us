// import React from 'react';

// const Logo = ({ color = '#1B1918' }) => {

//   // Define the CSS content as a separate string variable
//   const styleContent = `
//     @font-face {
//       font-family: "Rubik Light";
//       font-variant: normal;
//       font-style: normal;
//       font-weight: 300;
//       src: url("#FontID0") format(svg);
//     }
//     .fil1 {fill:#FFD400}
//     .fnt0 {font-weight:300;font-size:9.63px;font-family:'Rubik Light'}
//   `;

//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       xmlnsXlink="http://www.w3.org/1999/xlink"
//       xmlSpace="preserve"
//       width="210px"
//       height="28px"
//       version="1.1"
//       style={{
//         shapeRendering: 'geometricPrecision',
//         textRendering: 'geometricPrecision',
//         imageRendering: 'auto',
//         fillRule: 'evenodd',
//         clipRule: 'evenodd',
//       }}
//       viewBox="0 0 210 28"
//       data-name="Layer 1"
//     >
//       <defs>
//         {/* Use the defined string variable here */}
//         <style type="text/css">{styleContent}</style>
//       </defs>
//       <g id="Layer_x0020_1">
//         <metadata id="CorelCorpID_0Corel-Layer" />
//         <g id="_2442143456400">
//           <g>
//             <path
//               style={{ fill: color }}
//               d="M195.11 16.55l-4.89 -9.72 -4.88 9.72 9.77 0zm-148.51 -16.18l-11.16 0 13.71 13.63 -13.71 13.63 11.14 0 8.14 -8.09 8.15 8.08 11.14 0 -13.71 -13.62 13.72 -13.63 -11.15 0 -8.14 8.09 -8.13 -8.09zm80.79 0l19.61 19.43 0 -19.43 7.87 0 0 27.25 -11.19 0 -19.56 -19.42 0 19.42 -7.87 0 0 -27.25 11.14 0zm32 0l7.92 0 0 27.25 -7.88 0 -0.04 -27.25zm-158.89 13.63c0.02,-7.54 6.14,-13.63 13.68,-13.63 0.01,0 0.02,0 0.03,0l17.58 0 0 5.67 -15.03 0c-3.3,0.01 -6.25,2.04 -7.44,5.12l22.47 0 0 5.67 -22.47 0c1.19,3.07 4.14,5.1 7.44,5.12l15.03 0 0 5.67 -17.58 0c-0.01,0 -0.02,0 -0.03,0 -7.53,0 -13.65,-6.09 -13.68,-13.62l0 0zm81.81 0c0.01,4.4 3.58,7.96 7.97,7.96l6.05 0c4.41,0 7.98,-3.57 7.98,-7.97 0,-4.41 -3.57,-7.98 -7.98,-7.98l-6.05 0c-4.4,0.01 -7.97,3.58 -7.97,7.99 0,0 0,0 0,0l0 0zm30.28 0c-0.01,7.53 -6.13,13.63 -13.66,13.63 -0.01,0 -0.03,0 -0.04,0l-11.16 0c-7.53,0 -13.63,-6.1 -13.63,-13.63 0,-7.53 6.1,-13.63 13.63,-13.63l11.16 0c0.01,0 0.03,0 0.04,0 7.53,0 13.65,6.1 13.66,13.63l0 0zm83.17 -13.63l13.74 27.25 -8.83 0 -2.72 -5.4 -15.49 0 -2.71 5.4 -8.82 0 13.78 -27.25 11.05 0z"
//             />
//           </g>
//           <path
//             className="fil1"
//             d="M60.67 0.37l-11.87 0 5.93 5.9 5.94 -5.9zm0 27.25l-11.87 0 5.93 -5.9 5.94 5.9z"
//           />
//           <text
//             x="202.03"
//             y="7.18"
//             className="fnt0"
//             style={{ fill: color }}
//           >
//             ®
//           </text>
//         </g>
//       </g>
//     </svg>
//   );
// };

// export default Logo;

import React from 'react';

// Define the paths to your logo images in the public directory
const LIGHT_LOGO_PATH = '/ex-logo-light.svg'; // White logo, for dark backgrounds
const DARK_LOGO_PATH = '/ex-logo-dark.svg';  // Black logo, for light backgrounds

// Define the default variant
const DEFAULT_VARIANT = 'light'; // Default to the white logo

const Logo = ({ variant = DEFAULT_VARIANT }) => {
  // Determine which logo image source to use based on the 'variant' prop
  const logoSrc = variant === 'dark' ? DARK_LOGO_PATH : LIGHT_LOGO_PATH;

  // Set alt text for accessibility
  const altText = "Exonia Logo"; // Consider making this more specific if needed

  return (
    // Use an img tag to render the SVG file
    // Set width and height based on the original SVG dimensions
    <img
      src={logoSrc}
      alt={altText}
      width="210" // Set width without 'px' in React img tag
      height="28" // Set height without 'px' in React img tag
      // You can add additional styling here if needed, e.g., for responsiveness
      style={{ display: 'block' }} // Example: prevent extra space below the image
    />
  );
};

export default Logo;