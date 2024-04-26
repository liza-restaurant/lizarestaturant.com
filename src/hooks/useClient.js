import { useContext, useState } from "react";
import client from "../api";
import { RequestTypes, responseTypes } from "../api/request";
import urls from "../api/urls";
import { getDiff } from "../utils/date";
import store from "../utils/store";

function useClient() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const Request = async (type, ...args) => {
    const response = { error: null, data: null };
    if (!Object.values(RequestTypes).includes(type)) {
      response.error = { message: { message: "Invalid Request Type" } };
      return response;
    }
    try {
      setErrorMessage(null);
      // const tokens = store.getTokens();
      // if (tokens.accessToken) {
      //   const isAccessTokenExpired =
      //     getDiff(new Date(tokens.accessExpiry), new Date()) > 1;
      //   const isRefreshedTokenExpired =
      //     getDiff(new Date(tokens.refreshExpiry), new Date()) > 1;
      //   if (isRefreshedTokenExpired) return logout();
      //   if (isAccessTokenExpired) {
      //     const { data } = await client.post(
      //       urls.auth.restoreAccess,
      //       {},
      //       {
      //         headers: {
      //           "x-refresh-token": tokens.refreshToken,
      //         },
      //       }
      //     );
      //     if (!data.data) return logout();
      //     store.setTokens({ ...tokens, ...data.data.tokens });
      //     tokens.accessToken = data.data.tokens.accessToken;
      //   }
      // }
      // args[2] = {
      //   headers: {
      //     "x-access-token": tokens.accessToken,
      //   },
      // };
      setIsLoading(true);
      const res = await client[type](...args);
      if (res.data.type === responseTypes.error) {
        response.error = res.data;
        return response;
      }
      response.data = res.data;
    } catch (error) {
      console.log(error);
      console.log(error);
      setErrorMessage(error?.response?.data?.message);
      response["error"] = error?.response?.data;
    } finally {
      setIsLoading(false);
      setErrorMessage(response.error?.message);
    }
    return response;
  };

  const get = (...args) => {
    return Request(RequestTypes.GET, ...args);
  };
  const post = (...args) => {
    return Request(RequestTypes.POST, ...args);
  };
  const put = (...args) => {
    return Request(RequestTypes.PUT, ...args);
  };
  const fdelete = (...args) => {
    return Request(RequestTypes.DELETE, ...args);
  };
  const patch = (...args) => {
    return Request(RequestTypes.PATCH, ...args);
  };

  const logout = async () => {};

  return {
    isLoading,
    get,
    post,
    put,
    fdelete,
    patch,
    Request,
    errorMessage,
    logout,
  };
}

export default useClient;
