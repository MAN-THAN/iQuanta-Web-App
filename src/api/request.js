import axios from "axios";

axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_BASE_URL}`;
axios.defaults.withCredentials = true

const request = ({ url, type = "GET", data, headers = {} }) => {
  return axios({ url, method: type, data, headers });
};

export default request;
