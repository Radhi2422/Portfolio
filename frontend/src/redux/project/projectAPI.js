import axios from "../../services/axiosInstance";

export const getProjectByTitle = (title) => {
  return axios.get(`/projects${title}`);
};