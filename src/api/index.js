import axios from "axios";
import store from "../utils/store";

const client = axios.create({
  baseURL: "https://api-lizarestaurant-com.onrender.com",
  // baseURL: "http://localhost:2000/api",
  headers: {
    "x-access-token": store.getItem(store.accessTokenKey),
  },
});

export default client;
