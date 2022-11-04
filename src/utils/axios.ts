import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.pexels.com/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: "563492ad6f91700001000001d1f3950303644582a4d16317aecec8d1",
  },
});
