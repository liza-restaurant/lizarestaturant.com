export const getItem = (key) => {
  const value = localStorage.getItem(key);
  if (!value) return null;
  if (value.startsWith("{")) return JSON.parse(value).value;
  return value;
};
export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify({ value }));
};
export const removeItem = (key) => localStorage.removeItem(key);

// const getItem = (key) => {
//   try {
//     const item = localStorage.getItem(key);
//     return item ? JSON.parse(item).value : null;
//   } catch (error) {
//     return null;
//   }
// };
// const setItem = (key, value) => {
//   localStorage.setItem(key, JSON.stringify({ value }));
// };
// const removeItem = (key) => localStorage.removeItem(key);

const accessTokenKey = "accessToken";
const refreshTokenKey = "refreshToken";
const accessTokenExpiry = "accessTokenExpiry";
const refreshTokenExpiry = "refreshTokenExpiry";

const setTokens = (tokens) => {
  if (tokens.accessExpiry) setItem(accessTokenExpiry, tokens.accessExpiry);
  if (tokens.refreshExpiry) setItem(refreshTokenExpiry, tokens.refreshExpiry);
  if (tokens.accessToken) setItem(accessTokenKey, tokens.accessToken);
  if (tokens.refreshToken) setItem(refreshTokenKey, tokens.refreshToken);
};
const getTokens = () => ({
  accessExpiry: getItem(accessTokenExpiry),
  refreshExpiry: getItem(refreshTokenExpiry),
  accessToken: getItem(accessTokenKey),
  refreshToken: getItem(refreshTokenKey),
});

const removeTokens = () => {
  removeItem(accessTokenKey);
  removeItem(refreshTokenKey);
  removeItem(refreshTokenExpiry);
  removeItem(accessTokenExpiry);
};

const store = {
  getItem,
  setItem,
  removeItem,
  accessTokenExpiry,
  accessTokenKey,
  refreshTokenExpiry,
  refreshTokenKey,
  setTokens,
  removeTokens,
  getTokens,
};
export default store;
