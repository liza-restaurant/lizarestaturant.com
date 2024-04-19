import Button from "./Button";
import Title from "./Title";
import noodles from "../assets/noodles.png";
import egg from "../assets/egg.png";
import soup from "../assets/soup.png";
import drinks from "../assets/drinks.png";

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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <br />
        <Button title="View More" width={100} />
      </div>
      <div className="gallery">
        <Image image={noodles} />
        <Image image={egg} />
        <Image image={soup} />
        <Image image={drinks} />
        <Image image={noodles} />
        <Image image={egg} />
        <Image image={soup} />
        <Image image={drinks} />
      </div>
    </div>
  );
}

export default Gallery;
