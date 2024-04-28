import Button from "./Button";
import Title from "./Title";
import noodles from "../assets/noodles.png";
import egg from "../assets/egg.png";
import soup from "../assets/soup.png";
import drinks from "../assets/drinks.png";
import { images } from "../utils";

const Image = ({ image }) => {
  return (
    <div className="image">
      <img src={image} alt="" />
    </div>
  );
};

function Gallery(props) {
  return (
    <div className="flex mobile-column g-container align-center justify-between">
      <div className="container gallery-abt">
        <Title title="Photo Gallery" subtitle="Instagram" />
        <p>Explore our Instagram for a taste of what we offer.</p>
        <br />
        <Button title="View More" width={100} />
      </div>
      <div className="gallery">
        {images.map((i, idx) => (
          <Image key={idx} image={i.image} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
