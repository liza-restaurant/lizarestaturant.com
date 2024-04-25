import client from "../api";
import urls from "../api/urls";

export const numberFormatter = (n) =>
  n?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export function random_rgba(opacity = 0.2) {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return {
    bg:
      "rgba(" +
      o(r() * s) +
      "," +
      o(r() * s) +
      "," +
      o(r() * s) +
      `,${opacity})`,
    br: "rgba(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + ",1)",
  };
}

export const getLinkFromBase = (l) => l.replace("/*", "");
export const addToFormData = (object) => {
  const formData = new FormData();
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      formData.append(key, object[key]);
    }
  }
  return formData;
};

export const getImgUrl = (url) =>
  url
    ? client.getUri() + urls.files.baseUrl + url
    : "https://minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg";

export const getString = (obj, f) => {
  if (!f || !f.split) return null;
  f = f.split(".");
  let data = obj[f[0]];
  for (let i = 1; i < f.length; i++) {
    try {
      data = data[f[i]];
    } catch (error) {
      return null;
    }
  }
  return data;
};
