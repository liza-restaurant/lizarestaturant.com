import ImgBG from "./ImgBG";
import cup from "../assets/13.jpeg";
import Title from "./Title";
import Button from "./Button";

function FindUs(props) {
  return (
    <ImgBG>
      <div className="container img-bg-min flex mobile-column-reverse align-center justify-between">
        <div>
          <Title subtitle="Contact" title="Find Us" />
          <br />
          <div className="contact-info">
            <p>Monoliza amusement park Abuja, Nigeria.</p>
            <br />
            <h3 className="cormorant">Opening Hours</h3>
            <br />
            <span>Mon - Sun: 08:00 am - 10:00 pm</span>
            <br />
            <br />
          </div>
          <Button
            onClick={() =>
              window.open("https://maps.app.goo.gl/ZhT3Ht7F8g8xdu6n6")
            }
            title="Visit Us"
            width={100}
          />
        </div>
        <div className="img-chef frame-img flex justify-center align-center">
          <img src={cup} alt="Chef" />
        </div>
      </div>
    </ImgBG>
  );
}

export default FindUs;
