import styled from "@emotion/styled";

const SvgContainer = styled.svg`
  position: absolute;
  top: 84px;
  left: 0;
`;

export default function GraphSVG() {
  return (
    <SvgContainer
      width="375"
      height="344"
      viewBox="0 0 375 344"
      fill="none"
      style={{ position: "absolute", left: 0 }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_94_3824"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="375"
        height="344"
      >
        <rect width="375" height="344" fill="white" />
      </mask>
      <g mask="url(#mask0_94_3824)">
        <path
          d="M-129.166 282.903H-195V561H422V14H327.077L239.5 138.875L200.768 109.763H161.727L117.328 138.875H82.8797L55.3214 186.374H-17L-32 253.025H-49.5533L-72.5186 233.873H-101.608L-129.166 282.903Z"
          fill="url(#paint0_linear_94_3824)"
          stroke="#DC3C2C"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_94_3824"
          x1="113.5"
          y1="-121.601"
          x2="113.5"
          y2="314"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DC3C2C" stopOpacity="0.5" />
          <stop offset="1" stopColor="#DC3C2C" stopOpacity="0" />
        </linearGradient>
      </defs>
    </SvgContainer>
  );
}
