import Button from "./Button";
import ImgBG from "./ImgBG";
import Title from "./Title";
import knife from "../assets/knife.png";

function About(props) {
  return (
    <ImgBG>
      <div className="container img-bg-min about justify-between mobile-column flex align-center">
        <div className="cnt">
          <Title title="About Us" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
            odit officiis expedita perspiciatis ex iusto nostrum error beatae,
            aliquid molestias! Velit sequi nulla blanditiis quae repudiandae
            maiores sed repellat delectus.
          </p>
          <br />
          <Button title="Know More" width={100} />
        </div>
        <div className="flex abt-knfie justify-center align-center">
          <img src={knife} alt="knife" />
        </div>
        <div className="cnt">
          <Title title="Our History" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
            odit officiis expedita perspiciatis ex iusto nostrum error beatae,
            aliquid molestias! Velit sequi nulla blanditiis quae repudiandae
            maiores sed repellat delectus.
          </p>
          <br />
          <Button title="Know More" width={100} />
        </div>
      </div>
    </ImgBG>
  );
}

export default About;
