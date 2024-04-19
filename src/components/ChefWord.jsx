import chef from "../assets/chef.png";
import ImgBG from "./ImgBG";
import Title from "./Title";

function ChefWord(props) {
  return (
    <ImgBG className="chefword">
      <div
        style={{ height: "100%" }}
        className="container flex mobile-column align-center justify-between"
      >
        <div className="img-chef frame-img flex justify-center align-center">
          <img src={chef} alt="Chef" />
        </div>
        <div className="chef-details">
          <Title title="What we believe in" subtitle="Chef’s Word" />
          <br />
          <div className="contact-info">
            <p>
              auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
              sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
              molestie lectus eu. Congue iaculis integer curabitur semper sit
              nunc.
            </p>
            <br />
            <h3 className="cormorant">Kevin Luo</h3>
            <span>Chef & Founder</span>
            <br />
            <br />
          </div>
        </div>
      </div>
    </ImgBG>
  );
}

export default ChefWord;
