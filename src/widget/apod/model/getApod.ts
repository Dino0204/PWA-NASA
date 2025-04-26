import { axiosInstance } from "@/shared/apis/axiosInstance";

export const getApod = async () => {
  return axiosInstance.get("https://api.nasa.gov/planetary/apod");
};
