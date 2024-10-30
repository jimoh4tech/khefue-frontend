import { useContext } from "react";
import { FlightContext } from "../context/flight.context";

export const useFlightItenary = () => {
  const context = useContext(FlightContext);
  if (!context) {
    throw new Error("useFlightItenary must be used within a FlightProvider");
  }
  return context;
};
