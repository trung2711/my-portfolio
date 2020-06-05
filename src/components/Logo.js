import React from 'react'

function SvgLogo(props) {
  return (
    <svg width="2.2em" height="2.2em" viewBox="0 0 110 110" {...props}>
      <defs>
        <linearGradient id="logo_svg__c">
          <stop offset={0} stopColor="#d5cad6" />
          <stop offset={0.263} stopColor="#c9f0ff" />
          <stop offset={0.708} stopColor="#c9f0ff" />
          <stop offset={1} stopColor="#d5cad6" />
        </linearGradient>
        <linearGradient id="logo_svg__b">
          <stop offset={0} stopColor="#d5cad6" />
          <stop offset={1} stopColor="#c9f0ff" />
        </linearGradient>
        <linearGradient id="logo_svg__a">
          <stop offset={0} stopColor="#d5cad6" />
          <stop offset={0.458} stopColor="#c9f0ff" />
          <stop offset={1} stopColor="#d5cad6" />
        </linearGradient>
        <linearGradient
          xlinkHref="#logo_svg__a"
          id="logo_svg__d"
          x1={-4.374}
          y1={104.638}
          x2={96.734}
          y2={26.584}
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#logo_svg__b"
          id="logo_svg__e"
          gradientUnits="userSpaceOnUse"
          x1={44.819}
          y1={22.18}
          x2={31.003}
          y2={34.093}
        />
        <linearGradient
          xlinkHref="#logo_svg__b"
          id="logo_svg__f"
          x1={82.819}
          y1={22.181}
          x2={70.156}
          y2={33.928}
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#logo_svg__c"
          id="logo_svg__g"
          gradientUnits="userSpaceOnUse"
          x1={80.013}
          y1={-44.221}
          x2={38.455}
          y2={-55.779}
        />
      </defs>
      <g transform="translate(4.868 4.868)">
        <rect
          width={100}
          height={100}
          x={0.132}
          y={0.132}
          ry={22}
          rx={22}
          fill="none"
          stroke="url(#logo_svg__d)"
          strokeWidth={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          id="logo-left-line"
          width={27.639}
          height={11.639}
          x={17.18}
          y={22.18}
          rx={4.337}
          ry={5.742}
          fill="url(#logo_svg__e)"
        />
        <rect
          id="logo-right-line"
          ry={5.742}
          rx={4.337}
          y={22.18}
          x={55.18}
          height={11.639}
          width={27.639}
          fill="url(#logo_svg__f)"
        />
        <rect
          id="logo-vertical-line"
          ry={5.702}
          rx={3.775}
          y={-55.779}
          x={38.455}
          height={11.559}
          width={41.559}
          transform="rotate(90)"
          fill="url(#logo_svg__g)"
        />
      </g>
    </svg>
  );
}

export default SvgLogo