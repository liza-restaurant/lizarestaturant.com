import useProductCategories from "./hooks/useProductCategories";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getItem, setItem } from "./utils/store";
import DataContext from "./contexts/DataContext";
import ViewProduct from "./routes/ViewProduct";
import useProducts from "./hooks/useProducts";
import { useEffect, useState } from "react";
import Contact from "./components/Contact";
import NotFound from "./routes/NotFound";
import Footer from "./components/Footer";
import Menus from "./components/Menus";
import { Helmet } from "react-helmet";
import Base from "./routes/Base";
import { themes } from "./utils";

function App() {
  const [theme, setTheme] = useState(themes.dark);
  const [isSync, setIsSync] = useState(false);
  const [cart, setCart] = useState([]);

  const {
    categories,
    getCategories,
    isLoading: loading1,
  } = useProductCategories();
  const { products, getProducts, isLoading: loading2 } = useProducts();

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

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
    <DataContext.Provider
      value={{
        cart,
        setCart,
        setTheme,
        theme,
        categories,
        products,
        loading: loading1 || loading2,
      }}
    >
      {theme === themes.light ? (
        <Helmet>
          <meta name="theme-color" content="#fff" />
        </Helmet>
      ) : (
        <Helmet>
          <meta name="theme-color" content="#0c0b08" />
        </Helmet>
      )}
      <BrowserRouter>
        <div className={`app open-sans ${theme}`}>
          <Routes>
            <Route path="/" element={<Base />} />
            <Route path="/menu" element={<Menus />} />
            <Route path="/menu/:id" element={<ViewProduct />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
