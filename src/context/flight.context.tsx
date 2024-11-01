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
  const [selectedItenary, setSelectedItenary] = useState<number>(0);

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
      selectedItenary,
      setSelectedItenary,
    }),
    [airItenaryFlightInfo, searchObj, selectedItenary, sessionId]
  );

  return (
    <FlightContext.Provider value={contextValue}>
      {children}
    </FlightContext.Provider>
  );
};
