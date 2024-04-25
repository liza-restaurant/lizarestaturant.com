import { useContext, useState } from "react";
import urls from "../api/urls";
import useClient from "./useClient";

const useProductCategories = () => {
  const [totalCounts, setTotalCounts] = useState(0);
  const [categories, setCategories] = useState([]);
  const { isLoading, post, patch, get, errorMessage } = useClient();

  const getCategories = async (pageNumber = 1, pageSize = 1000) => {
    const { data, error } = await get(
      urls.products.categories.baseUrl
        .replace("{limit}", pageSize)
        .replace("{page}", pageNumber)
    );
    if (error) return;
    if (!totalCounts) setTotalCounts(data.data.totalCounts);
    setCategories(data.data.categories);
  };

  const handleRefresh = (error, data, pageSize = 1000, currentPage = 1, cb) => {
    if (error) return alert(error.message);
    alert(data.message);
    getCategories(currentPage, pageSize);
    if (typeof cb === "function") cb();
  };

  const addCategory = async (details, pageSize = 1000, currentPage = 1, cb) => {
    const { data, error } = await post(urls.products.categories.add, details);
    handleRefresh(error, data, pageSize, currentPage, cb);
  };

  const updateCategory = async (
    details,
    id,
    pageSize = 1000,
    currentPage = 1,
    cb
  ) => {
    const { data, error } = await patch(
      urls.products.categories.baseUrl + id,
      details
    );
    handleRefresh(error, data, pageSize, currentPage, cb);
  };

  return {
    errorMessage,
    isLoading: isLoading,
    categories,
    getCategories,
    totalCounts,
    addCategory,
    updateCategory,
  };
};

export default useProductCategories;
