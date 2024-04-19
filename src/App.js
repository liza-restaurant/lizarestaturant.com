import ChefWord from "./components/ChefWord";
import FindUs from "./components/FindUs";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Menus from "./components/Menus";
import Video from "./components/Video";

function App() {
  return (
    <div className="app open-sans">
      <Hero />
      <ChefWord />
      <Video />
      <br />
      <Menus />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
}

export default App;
