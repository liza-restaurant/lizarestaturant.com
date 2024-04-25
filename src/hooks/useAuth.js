import { useContext } from "react";
import urls from "../api/urls";
import AppContext from "../contexts/AppContext";
import store from "../utils/store";
import useClient from "./useClient";

const useAuth = () => {
  const { setUser, setIsReady } = useContext(AppContext);
  const { isLoading, post, get, errorMessage } = useClient();

  const login = async (details) => {
    const { data, error } = await post(urls.auth.login, details);
    if (error) return;
    store.setTokens(data.data.tokens);
    store.setItem(urls.profile.me, { data: { profile: data.data.profile } });
    window.location = "/";
  };

  const restoreUser = async () => {
    try {
      const accessToken = store.getItem(store.accessTokenKey);
      if (!accessToken) return;
      const savedUser = store.getItem(urls.profile.me);
      if (savedUser) {
        setUser(savedUser.data.profile);
        return;
      }
      const { data, error } = await get(urls.profile.me);
      if (error) return;
      setUser(data.data);
      store.setItem(urls.profile.me, {
        data: { profile: data.data.profile },
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsReady(true);
    }
  };

  return {
    login,
    errorMessage,
    isLoading: isLoading,
    restoreUser,
  };
};

export default useAuth;
