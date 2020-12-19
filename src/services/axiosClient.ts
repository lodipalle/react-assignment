import axios from "axios";
import { configs } from "../configs/app";

const instance = axios.create({
  baseURL: configs.apiUrl,
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
});

export default instance;
