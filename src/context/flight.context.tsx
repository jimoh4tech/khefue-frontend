import { createContext, ReactNode, useState, useMemo } from "react";
import {
  FareItinerary,
  FlightContextType,
} from "../interface/flight.interface";

export const FlightContext = createContext<FlightContextType | undefined>(
  undefined
);

export const FlightProvider = ({ children }: { children: ReactNode }) => {
  const [airItenaryFlightInfo, setItineraries] = useState<FareItinerary[]>([]);

  const setAirItenaryFlightInfo = (newItineraries: FareItinerary[]) => {
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
