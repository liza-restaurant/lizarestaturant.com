import salmon from "../assets/fish.jpeg";
import Button from "./Button";
import "../css/hero.css";

function Hero(props) {
  return (
    <div className="hero">
      <div className="container mobile-column flex justify-between align-center">
        <div className="hero-texts">
          <span className="cormorant intro-text">Chase the new Flavour</span>
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

          <h2 className="cormorant">The key to Fine dining</h2>
          <p>
            Discover Our Delicious Creations Taste the Difference in Every Bite
            Experience the Flavors of Our Kitchen Uncover Your New Favorite Dish
            Satisfy Your Cravings with Our Menu
          </p>
          <br />
          <Button to="/menu" width={140} title="Explore Menu" />
        </div>
        <div className="img-hero frame-img flex justify-center align-center">
          <img src={salmon} alt="Salmon Fish" />
        </div>
        <div className="scroller desktop flex flex-column justify-end align-center">
          <svg
            width="1"
            height="61"
            viewBox="0 0 1 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.499878 61L0.499884 9.53674e-07"
              stroke="url(#paint0_linear_0_54)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_0_54"
                x1="29.0041"
                y1="-11.8571"
                x2="29.0041"
                y2="78.2931"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#DCCA87" />
                <stop offset="0.430036" stopColor="#DCCA87" />
                <stop
                  offset="0.927083"
                  stopColor="#DCCA87"
                  stopOpacity="0.24"
                />
              </linearGradient>
            </defs>
          </svg>
          <span className="cormorant f700">SCROLL</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
