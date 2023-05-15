import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://projects-server-bxzc.onrender.com/api/v1",
});
