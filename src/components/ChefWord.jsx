import chef from "../assets/13.jpeg";
import Button from "./Button";
import ImgBG from "./ImgBG";
import Title from "./Title";

function ChefWord(props) {
  return (
    <ImgBG>
      <div className="container img-bg-min flex mobile-column align-center justify-between">
        <div className="img-chef frame-img flex justify-center align-center">
          <img src={chef} alt="Chef" />
        </div>
        {/* <div className="chef-details">
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
        </div> */}
        <div className="chef-details">
          <Title title="Event Reservation" subtitle="Events" />
          <br />
          <div className="contact-info">
            <p>
              Host Your Next Event With Us! Make Your Event Unforgettable, Your
              Event, Our Space Elevate Your Event Here! Reserve Our Restaurant
              for Your Special Event
            </p>
            <br />
            <Button
              width={150}
              title="Book Now"
              to="/contact?type=reservation"
            />
            <br />
            <br />
          </div>
        </div>
      </div>
    </ImgBG>
  );
}

export default ChefWord;
