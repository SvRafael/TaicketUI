import authApi from "./authApi";

const get = (...options) => {
  return authApi.get("/events", ...options);
};

const remove = ({ id }) => {
  return authApi.delete(`/events/${id}`);
};

export default {
  get,
  remove,
};
