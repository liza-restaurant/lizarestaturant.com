import About from "../components/About";
import ChefWord from "../components/ChefWord";
import FindUs from "../components/FindUs";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Video from "../components/Video";

function Base(props) {
  return (
    <>
      <Header />
      <Hero />
      {/* <About /> */}
      {/* <ChefWord /> */}
      <Video />
      <br />
      <Gallery />
      <FindUs />
    </>
  );
}

export default Base;
