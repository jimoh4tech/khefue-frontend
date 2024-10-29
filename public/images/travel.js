import { base_url } from "../ProtectedRoute";
import apiClient from "./apiClient";

export const getAirportList = async () => {
  try {
    const response = await apiClient.get(
      `${base_url}/travel/list-airports?pageSize=10000&page=1`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response
      ? error.response.data
      : new Error("Failed to fetch airports");
  }
};

export const searchFlight = async (data) => {
  try {
    const response = await apiClient.post(`${base_url}/travel/search`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw error.response
      ? error.response.data
      : new Error("Failed to fetch search");
  }
};
