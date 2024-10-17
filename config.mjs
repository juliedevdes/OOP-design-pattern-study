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
    pending: 1,
    approved: 0,
  },
};

export { APIConfigs };
