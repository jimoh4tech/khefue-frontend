import { axiosInstance } from "./auth.services";

export const getAirportList = async () => {
  const response = await axiosInstance.get(
    `/travel/list-airports?pageSize=10000&page=1`
  );
  return response.data;
};
