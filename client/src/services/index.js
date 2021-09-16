import Axios from "axios";
export const Instance = Axios.create({
  baseURL : "https://localhost:2020",
  data:{},
});
