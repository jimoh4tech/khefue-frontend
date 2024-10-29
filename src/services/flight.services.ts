import { axiosInstance } from "./auth.services";

export const getAirportList = async () => {
  const response = await axiosInstance.get(
    `/travel/list-airports?pageSize=10000&page=1`
  );
  return response.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const searchFlight = async (data: any) => {
  const response = await axiosInstance.post(`/travel/search`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
