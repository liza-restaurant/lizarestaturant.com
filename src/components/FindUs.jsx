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
            <p>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
            <br />
            <h3 className="cormorant">Opening Hours</h3>
            <br />
            <span>Mon - Fri: 10:00 am - 02:00 am</span>
            <span>Sat - Sun: 10:00 am - 03:00 am</span>
            <br />
            <br />
          </div>
          <Button title="Visit Us" width={100} />
        </div>
        <div className="img-chef frame-img flex justify-center align-center">
          <img src={cup} alt="Chef" />
        </div>
      </div>
    </ImgBG>
  );
}

export default FindUs;
