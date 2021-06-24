import axiosInstance from "src/utils/axiosInstance";
import { HOST } from "src/constants";

export const test = async () => {
  const res = await axiosInstance.get(`${HOST}/test`);
  return res.data;
};
