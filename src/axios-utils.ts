import axios from "axios";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const axiosRequest = ({ ...options }) => {
  client.defaults.headers.common.Authorization = "Bearer token";
  return client(options)
    .then((res) => res)
    .catch((err) => err);
};
