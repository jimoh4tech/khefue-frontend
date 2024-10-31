import { createContext, ReactNode, useState, useMemo } from "react";
import {
  FareItineraries,
  FlightContextType,
  FlightSearchProps,
} from "../interface/flight.interface";

// eslint-disable-next-line react-refresh/only-export-components
export const FlightContext = createContext<FlightContextType | undefined>(
  undefined
);

export const FlightProvider = ({ children }: { children: ReactNode }) => {
  const [airItenaryFlightInfo, setItineraries] = useState<
    FareItineraries[] | null
  >([]);
  const [searchObj, setSearchObj] = useState<FlightSearchProps | null>(null);
  const [sessionId, setSessionId] = useState<string>("");

  const setAirItenaryFlightInfo = (
    newItineraries: FareItineraries[] | null
  ) => {
    setItineraries(() =>
      newItineraries === null ? null : [...newItineraries]
    );
  };

  const contextValue = useMemo(
    () => ({
      airItenaryFlightInfo,
      setAirItenaryFlightInfo,
      searchObj,
      setSearchObj,
      sessionId,
      setSessionId,
    }),
    [airItenaryFlightInfo, searchObj, sessionId]
  );

  return (
    <FlightContext.Provider value={contextValue}>
      {children}
    </FlightContext.Provider>
  );
};
