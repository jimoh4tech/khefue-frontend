import { createContext, ReactNode, useState, useMemo } from "react";
import {
  FareItineraries,
  FlightContextType,
} from "../interface/flight.interface";

export const FlightContext = createContext<FlightContextType | undefined>(
  undefined
);

export const FlightProvider = ({ children }: { children: ReactNode }) => {
  const [airItenaryFlightInfo, setItineraries] = useState<FareItineraries[]>(
    []
  );

  const setAirItenaryFlightInfo = (newItineraries: FareItineraries[]) => {
    setItineraries(() => [...newItineraries]);
  };

  const contextValue = useMemo(
    () => ({ airItenaryFlightInfo, setAirItenaryFlightInfo }),
    [airItenaryFlightInfo]
  );

  return (
    <FlightContext.Provider value={contextValue}>
      {children}
    </FlightContext.Provider>
  );
};
