import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Base from "./routes/Base";
import Menus from "./components/Menus";
import NotFound from "./routes/NotFound";
import ViewProduct from "./routes/ViewProduct";

function App() {
  return (
    <BrowserRouter>
      <div className="app open-sans">
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Base />} />
          <Route path="/menu" element={<Menus />} />
          <Route path="/menu/:id" element={<ViewProduct />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
