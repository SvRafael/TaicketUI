import authApi from "./authApi";

const getEvent = ({ id, ...options } = { id: "" }) => {
  return authApi.get(`/sales/events/${id}`, options);
};

const create = ({ ...data }) => {
  return authApi.post(`/sales`, data);
};

export default {
  getEvent,
  create,
};
