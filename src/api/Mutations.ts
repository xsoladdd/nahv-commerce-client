// import cookies from "js-cookie";
import cookies from "js-cookie";
import axiosInstance from "src/utils/axiosInstance";
import { loginParameters, registerParameters } from "./interface";
import { HOST } from "src/constants";

export const register = async ({ data }: registerParameters) => {
  const res = await axiosInstance.post(`${HOST}/register`, data);
  return res.data;
};

export const login = async ({ data }: loginParameters) => {
  const res = await axiosInstance.post(`${HOST}/login`, data);
  return res.data;
};
