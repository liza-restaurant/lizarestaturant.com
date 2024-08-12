const urls = {
  auth: {
    login: "/v1/admin/login",
    logout: "/v1/admin/logout",
    restoreAccess: "/v1/admin/refresh-access",
  },
  messages: {
    baseUrl: "/v1/messages",
  },
  news: {
    baseUrl: "/v1/news",
  },
  reservations: {
    baseUrl: "/v1/reservations",
  },
  profile: {
    baseUrl: "/v1/admin/",
    accounts: "/v1/admin/accounts/",
    me: "/v1/admin/me",
    profiles: "/v1/admin/accounts?limit={limit}&pageNumber={page}",
    add: "/v1/admin/add",
    changePassword: "/change-password",
    resetPassword: "/reset-password",
  },
  files: {
    baseUrl: "/v1/files/",
    image: "/image",
  },
  storeKeepers: {
    baseUrl: "/v1/store-keepers/",
    accounts: "/v1/store-keepers/accounts/",
    add: "/v1/store-keepers/add",
  },
  stores: {
    baseUrl: "/v1/stores/",
    add: "/v1/stores/add",
  },
  products: {
    baseUrl: "/v1/products/",
    add: "/v1/products/add",
    categories: {
      baseUrl: "/v1/products/categories?q=false",
      add: "/v1/products/categories/add",
    },
    stocks: {
      baseUrl: "/v1/products/stocks/",
      reStock: "/v1/products/stocks/re-stock",
    },
  },
  logs: {
    baseUrl: "/v1/logs",
  },
  sales: {
    baseUrl: "/v1/products/sales",
  },
  activities: {
    baseUrl: "/v1/activities",
  },
};

export default urls;
