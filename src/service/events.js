import authApi from "./authApi";

const get = ({ id, ...options } = { id: "" }) => {
  return authApi.get(`/events/${id}`, options);
};

const remove = ({ id, ...options }) => {
  return authApi.delete(`/events/${id}`, options);
};

export default {
  get,
  remove,
};
