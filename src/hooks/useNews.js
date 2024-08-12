import useClient from "./useClient";
import urls from "../api/urls";

const useNews = () => {
  const { post, isLoading } = useClient();
  const addEmail = async (fdata) => {
    const { data, error } = await post(urls.news.baseUrl, fdata);
    if (error) return alert(error?.message);
    alert(data.message);
  };
  return { addEmail, isLoading };
};

export default useNews;
