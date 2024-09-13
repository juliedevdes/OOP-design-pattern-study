const APIConfigs = {
  HOST: "https://api.thecatapi.com",
  URLS: {
    uploadUrl: "/v1/images/upload",
  },
  METHODS: {
    put: "PUT",
    post: "POST",
    get: "GET",
  },
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "DEMO-API-KEY",
  },
  body: {
    id: "9ccXTANkb",
    url: "https://cdn2.thecatapi.com/images/9ccXTANkb.jpg",
    pending: 0,
    approved: 1,
  },
};

export { APIConfigs };
