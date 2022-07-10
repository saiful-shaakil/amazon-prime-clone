import axios from "axios";

const instance = axios.create({
  baseURL: "", //URL of API
});
export default instance;
