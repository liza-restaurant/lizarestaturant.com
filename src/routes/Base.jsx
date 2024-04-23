import ChefWord from "../components/ChefWord";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import FindUs from "../components/FindUs";
import Video from "../components/Video";
// import About from "../components/About";
import Hero from "../components/Hero";

function Base(props) {
  return (
    <>
      <Header />
      <Hero />
      {/* <About /> */}
      <ChefWord />
      <Video />
      <br />
      <Gallery />
      <FindUs />
    </>
  );
}

export default Base;
