import { useQuery } from "react-query";
import { axiosRequest } from "../axios-utils";

const fetcherFunction = (id: any) => {
  return axiosRequest({ url: `/users/${id}` });
};

export const useFetchUserDetails = (id: any) => {
  return useQuery(["userDetails", id], () => fetcherFunction(id));
};
