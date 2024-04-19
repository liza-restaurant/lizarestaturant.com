function Title({ title, subtitle }) {
  return (
    <div className="title">
      <span className="cormorant intro-text">{subtitle}</span>
      <br />
      <svg
        width="40"
        height="10"
        viewBox="0 0 40 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_0_37)">
          <path
            d="M33.5013 9.5C37.0847 9.5 39.9998 7.48129 39.9998 4.99995C39.9998 2.51861 37.0847 0.5 33.5013 0.5C30.112 0.5 27.3219 2.30637 27.0298 4.6018H22.3526V3.6552L-0.000244141 3.6552V6.34446L22.3528 6.34446V5.39798H27.0299C27.322 7.69352 30.112 9.5 33.5013 9.5ZM21.4896 5.54839L0.863049 5.54839V4.45161H21.4896V5.54839ZM27.866 4.99995C27.866 2.95778 30.3941 1.2964 33.5015 1.2964C36.6088 1.2964 39.1369 2.95778 39.1369 4.99995C39.1369 7.04222 36.6088 8.7037 33.5015 8.7037C30.3941 8.7037 27.866 7.04222 27.866 4.99995Z"
            fill="#DCCA87"
          />
        </g>
        <defs>
          <clipPath id="clip0_0_37">
            <rect
              width="40"
              height="9"
              fill="white"
              transform="translate(-0.000244141 0.5)"
            />
          </clipPath>
        </defs>
      </svg>
      <h2 className="cormorant">{title}</h2>
    </div>
  );
}

export default Title;
