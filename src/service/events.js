import authApi from "./authApi";

const get = (...options) => {
  return authApi.get("/events", ...options);
};

export default {
  get,
};
