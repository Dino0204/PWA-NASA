import axios from "axios";

export const axiosInstance = axios.create({
  params: {
    api_key: process.env.NEXT_PUBLIC_API_KEY,
  },
});
