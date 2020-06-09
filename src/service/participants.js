import authApi from "./authApi";

const create = ({ ...data }) => {
  return authApi.post(`/participants`, data);
};

export default {
  create,
};
