import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewProduct from "./routes/ViewProduct";
import NotFound from "./routes/NotFound";
import Footer from "./components/Footer";
import Menus from "./components/Menus";
import Base from "./routes/Base";
import { useEffect, useState } from "react";
import DataContext from "./contexts/DataContext";
import { getItem, setItem } from "./utils/store";
import { themes } from "./utils";

function App() {
  const [theme, setTheme] = useState(themes.dark);
  const [isSync, setIsSync] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cart = getItem("cart") || [];
    const theme = getItem("theme") || themes.dark;
    setCart(cart);
    setTheme(theme);
    setIsSync(true);
  }, []);

  useEffect(() => {
    if (isSync) {
      setItem("cart", cart);
    }
  }, [cart, isSync]);

  useEffect(() => {
    if (isSync) {
      setItem("theme", theme);
    }
  }, [theme, isSync]);

  return (
    <DataContext.Provider value={{ cart, setCart, setTheme, theme }}>
      <BrowserRouter>
        <div className={`app open-sans ${theme}`}>
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
