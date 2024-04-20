import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewProduct from "./routes/ViewProduct";
import NotFound from "./routes/NotFound";
import Footer from "./components/Footer";
import Menus from "./components/Menus";
import Base from "./routes/Base";
import { useEffect, useState } from "react";
import DataContext from "./contexts/DataContext";
import { getItem, setItem } from "./utils/store";

function App() {
  const [cartSync, setCartSync] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cart = getItem("cart") || [];
    setCart(cart);
    setCartSync(true);
  }, []);

  useEffect(() => {
    if (cartSync) {
      setItem("cart", cart);
    }
  }, [cart, cartSync]);

  return (
    <DataContext.Provider value={{ cart, setCart }}>
      <BrowserRouter>
        <div className="app open-sans">
          <Routes>
            <Route path="/" element={<Base />} />
            <Route path="/menu" element={<Menus />} />
            <Route path="/menu/:id" element={<ViewProduct />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
