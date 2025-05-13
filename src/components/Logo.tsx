

// const Logo = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     xmlnsXlink="http://www.w3.org/1999/xlink"
//     xmlSpace="preserve"
//     width="210px"
//     height="28px"
//     version="1.1"
//     style={{
//       shapeRendering: 'geometricPrecision',
//       textRendering: 'geometricPrecision',
//       imageRendering: 'auto',
//       fillRule: 'evenodd',
//       clipRule: 'evenodd'
//     }}
//     viewBox="0 0 210 28"
//     data-name="Layer 1"
//   >
//     <defs>
//       <style type="text/css">
//         {`@font-face { font-family:"Rubik Light";font-variant:normal;font-style:normal;font-weight:300;src:url("#FontID0") format(svg)}
//         .fil0 {fill:#1B1918}
//         .fil1 {fill:#FFD400}
//         .fnt0 {font-weight:300;font-size:9.63px;font-family:'Rubik Light'}`}
//       </style>
//     </defs>
//     <g id="Layer_x0020_1">
//       <metadata id="CorelCorpID_0Corel-Layer" />
//       <g id="_2442143456400">
//         <g>
//           <path className="fil0" d="M195.11 16.55l-4.89 -9.72 -4.88 9.72 9.77 0zm-148.51 -16.18l-11.16 0 13.71 13.63 -13.71 13.63 11.14 0 8.14 -8.09 8.15 8.08 11.14 0 -13.71 -13.62 13.72 -13.63 -11.15 0 -8.14 8.09 -8.13 -8.09zm80.79 0l19.61 19.43 0 -19.43 7.87 0 0 27.25 -11.19 0 -19.56 -19.42 0 19.42 -7.87 0 0 -27.25 11.14 0zm32 0l7.92 0 0 27.25 -7.88 0 -0.04 -27.25zm-158.89 13.63c0.02,-7.54 6.14,-13.63 13.68,-13.63 0.01,0 0.02,0 0.03,0l17.58 0 0 5.67 -15.03 0c-3.3,0.01 -6.25,2.04 -7.44,5.12l22.47 0 0 5.67 -22.47 0c1.19,3.07 4.14,5.1 7.44,5.12l15.03 0 0 5.67 -17.58 0c-0.01,0 -0.02,0 -0.03,0 -7.53,0 -13.65,-6.09 -13.68,-13.62l0 0zm81.81 0c0.01,4.4 3.58,7.96 7.97,7.96l6.05 0c4.41,0 7.98,-3.57 7.98,-7.97 0,-4.41 -3.57,-7.98 -7.98,-7.98l-6.05 0c-4.4,0.01 -7.97,3.58 -7.97,7.99 0,0 0,0 0,0l0 0zm30.28 0c-0.01,7.53 -6.13,13.63 -13.66,13.63 -0.01,0 -0.03,0 -0.04,0l-11.16 0c-7.53,0 -13.63,-6.1 -13.63,-13.63 0,-7.53 6.1,-13.63 13.63,-13.63l11.16 0c0.01,0 0.03,0 0.04,0 7.53,0 13.65,6.1 13.66,13.63l0 0zm83.17 -13.63l13.74 27.25 -8.83 0 -2.72 -5.4 -15.49 0 -2.71 5.4 -8.82 0 13.78 -27.25 11.05 0z" />
//         </g>
//         <path className="fil1" d="M60.67 0.37l-11.87 0 5.93 5.9 5.94 -5.9zm0 27.25l-11.87 0 5.93 -5.9 5.94 5.9z" />
//         <text x="202.03" y="7.18" className="fil0 fnt0">®</text>
//       </g>
//     </g>
//   </svg>
// );

// export default Logo;

import React from 'react';

const Logo = ({ color = '#1B1918' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink" // React uses camelCase for namespaced attributes
    xmlSpace="preserve" // React uses camelCase
    width="210px"
    height="28px"
    version="1.1"
    style={{
      shapeRendering: 'geometricPrecision',
      textRendering: 'geometricPrecision',
      imageRendering: 'auto',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    }}
    viewBox="0 0 210 28"
    data-name="Layer 1"
  >
    <defs>
      <style type="text/css">
        {`
          @font-face {
            font-family: "Rubik Light";
            font-variant: normal;
            font-style: normal;
            font-weight: 300;
            src: url("#FontID0") format(svg); /* Ensure FontID0 is defined if it's a local reference, or use a web font */
          }
          /* .fil0 class is removed as its color is now controlled by the 'color' prop */
          .fil1 {fill:#FFD400} /* This is the yellow part, remains unchanged */
          .fnt0 {font-weight:300;font-size:9.63px;font-family:'Rubik Light'}
        `}
      </style>
      {/* If FontID0 refers to an actual font definition within the SVG, it should be here.
          For example:
          <font id="FontID0" horiz-adv-x="1000">
            <font-face font-family="Rubik Light" font-weight="300" font-style="normal" units-per-em="1000" />
            <missing-glyph horiz-adv-x="500" />
            <glyph unicode="A" horiz-adv-x="600" d="..." />
            ... more glyphs ...
          </font>
          However, typically for web, you'd link a web font or have it globally available.
          The original SVG implies an embedded font definition which is not fully shown.
          For simplicity, this example assumes 'Rubik Light' is available globally or via CSS.
      */}
    </defs>
    <g id="Layer_x0020_1">
      <metadata id="CorelCorpID_0Corel-Layer" />
      <g id="_2442143456400">
        <g>
          {/* This path now uses the 'color' prop for its fill */}
          <path
            style={{ fill: color }}
            d="M195.11 16.55l-4.89 -9.72 -4.88 9.72 9.77 0zm-148.51 -16.18l-11.16 0 13.71 13.63 -13.71 13.63 11.14 0 8.14 -8.09 8.15 8.08 11.14 0 -13.71 -13.62 13.72 -13.63 -11.15 0 -8.14 8.09 -8.13 -8.09zm80.79 0l19.61 19.43 0 -19.43 7.87 0 0 27.25 -11.19 0 -19.56 -19.42 0 19.42 -7.87 0 0 -27.25 11.14 0zm32 0l7.92 0 0 27.25 -7.88 0 -0.04 -27.25zm-158.89 13.63c0.02,-7.54 6.14,-13.63 13.68,-13.63 0.01,0 0.02,0 0.03,0l17.58 0 0 5.67 -15.03 0c-3.3,0.01 -6.25,2.04 -7.44,5.12l22.47 0 0 5.67 -22.47 0c1.19,3.07 4.14,5.1 7.44,5.12l15.03 0 0 5.67 -17.58 0c-0.01,0 -0.02,0 -0.03,0 -7.53,0 -13.65,-6.09 -13.68,-13.62l0 0zm81.81 0c0.01,4.4 3.58,7.96 7.97,7.96l6.05 0c4.41,0 7.98,-3.57 7.98,-7.97 0,-4.41 -3.57,-7.98 -7.98,-7.98l-6.05 0c-4.4,0.01 -7.97,3.58 -7.97,7.99 0,0 0,0 0,0l0 0zm30.28 0c-0.01,7.53 -6.13,13.63 -13.66,13.63 -0.01,0 -0.03,0 -0.04,0l-11.16 0c-7.53,0 -13.63,-6.1 -13.63,-13.63 0,-7.53 6.1,-13.63 13.63,-13.63l11.16 0c0.01,0 0.03,0 0.04,0 7.53,0 13.65,6.1 13.66,13.63l0 0zm83.17 -13.63l13.74 27.25 -8.83 0 -2.72 -5.4 -15.49 0 -2.71 5.4 -8.82 0 13.78 -27.25 11.05 0z"
          />
        </g>
        {/* This path remains yellow, using the .fil1 class */}
        <path
          className="fil1"
          d="M60.67 0.37l-11.87 0 5.93 5.9 5.94 -5.9zm0 27.25l-11.87 0 5.93 -5.9 5.94 5.9z"
        />
        {/* This text now uses the 'color' prop for its fill, retaining its font class .fnt0 */}
        <text
          x="202.03"
          y="7.18"
          className="fnt0" // Only fnt0 class is needed now
          style={{ fill: color }} // Fill color from prop
        >
          ®
        </text>
      </g>
    </g>
  </svg>
);

// Example of how to use it:
// <Logo /> {/* Will be black (default) */}
// <Logo color="white" /> {/* Will be white */}
// <Logo color="#00FF00" /> {/* Will be green */}

export default Logo;
