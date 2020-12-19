import axiosClient from "axios";
import { configs } from "../configs/app";

export const fetchUser = async (): Promise<any> => {
  const result = await axiosClient.get(`${configs.apiUrl}?page=1`);
  return result;
};
