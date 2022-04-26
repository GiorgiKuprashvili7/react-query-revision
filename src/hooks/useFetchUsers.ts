import axios from "axios";
import { useMutation, useQuery } from "react-query";

const fetchUsers = async (page: number) => {
  const data = await axios.get(
    `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=2`
  );
  return data;
};

export const useFetchUsers = (num: number) => {
  return useQuery(["users", num], () => fetchUsers(num), {
    keepPreviousData: true,
  });
};

const addUser = (user: any) => {
  return axios.post("https://jsonplaceholder.typicode.com/users", user);
};

export const useAddUser = () => {
  return useMutation(addUser);
};
