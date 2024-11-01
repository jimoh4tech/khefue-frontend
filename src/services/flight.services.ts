import { FlightBookingInfo } from "../interface/flight.interface";
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
export const validateFare = async (
  session_id: string,
  fare_source_code: string
) => {
  const response = await axiosInstance.patch(
    `/travel/validate-fare`,
    { session_id, fare_source_code },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};
export const fareRule = async (
  session_id: string,
  fare_source_code: string
) => {
  const response = await axiosInstance.patch(
    `/travel/get-fare-rule`,
    { session_id, fare_source_code },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};
export const bookFlight = async (data: FlightBookingInfo) => {
  const response = await axiosInstance.post(`/travel/booking`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
export const getBookings = async () => {
  const response = await axiosInstance.get(`/travel/bookings`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
export const getBooking = async (id: string) => {
  const response = await axiosInstance.get(`/travel/booking/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const cancelBooking = async (UniqueID: string) => {
  const response = await axiosInstance.patch(
    `/travel/get-fare-rule`,
    { UniqueID },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};
