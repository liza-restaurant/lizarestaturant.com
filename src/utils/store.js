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
