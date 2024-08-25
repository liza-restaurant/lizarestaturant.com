import { useContext, useState } from "react";
import urls from "../api/urls";
import { addToFormData } from "../utils/funcs";
import useClient from "./useClient";

const useProducts = () => {
  const [totalCounts, setTotalCounts] = useState(0);
  const [products, setProducts] = useState([]);
  const { isLoading, post, patch, get, errorMessage } = useClient();

  const getProducts = async (pageNumber = 1, pageSize = 1000) => {
    const { data, error } = await get(
      urls.products.baseUrl
        .replace("{limit}", pageSize)
        .replace("{page}", pageNumber)
    );
    if (error || data?.data) return;
    if (!totalCounts) setTotalCounts(data.data.totalCounts);
    setProducts(data.data.products);
  };

  const handleRefresh = (error, data, pageSize = 1000, currentPage = 1, cb) => {
    if (error) return alert(error.message);
    alert(data.message);
    getProducts(currentPage, pageSize);
    if (typeof cb === "function") cb();
  };

  const addProduct = async (
    details,
    image,
    pageSize = 1000,
    currentPage = 1,
    cb
  ) => {
    details = addToFormData(details);
    if (image) details.append("image", image);
    const { data, error } = await post(urls.products.add, details);
    handleRefresh(error, data, pageSize, currentPage, cb);
  };

  const updateProduct = async (
    details,
    image,
    id,
    pageSize = 1000,
    currentPage = 1,
    cb
  ) => {
    details = addToFormData(details);
    if (image) details.append("image", image);
    const { data, error } = await patch(urls.products.baseUrl + id, details);
    handleRefresh(error, data, pageSize, currentPage, cb);
  };

  return {
    errorMessage,
    isLoading: isLoading,
    products,
    getProducts,
    totalCounts,
    addProduct,
    updateProduct,
  };
};

export default useProducts;
