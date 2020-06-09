import authApi from "./authApi";

const get = ({ id, ...options } = { id: "" }) => {
  return authApi.get(`/sales/${id}`, options);
};

const getEvent = ({ id, ...options } = { id: "" }) => {
  return authApi.get(`/sales/events/${id}`, options);
};

const create = ({ ...data }) => {
  return authApi.post(`/sales`, data);
};

export default {
  get,
  getEvent,
  create,
};
