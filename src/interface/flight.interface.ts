// Define the structure of the airport options
export interface AirportOption {
  value: string;
  label: string;
}

// Props for the SearchableSelect component
export interface SearchableSelectProps {
  options: AirportOption[];
  onChange: (selectedOption: AirportOption | null) => void;
  name: string;
  value: AirportOption | null;
}

export interface FlightSearchProps {
  requiredCurrency: string;
  journeyType: string;
  departureDate: string;
  airportOriginCode: AirportOption | null;
  returnDate: string;
  airportDestinationCode: AirportOption | null;
  class: string;
  adults: string;
  childs: string;
  infants: string;
}

export interface FlightSegment {
  ArrivalAirportLocationCode: string;
  ArrivalDateTime: Date;
  DepartureAirportLocationCode: string;
  DepartureDateTime: Date;
  MarketingAirlineName: string;
  MarketingAirlineCode: string;
  FlightNumber: string;
  CabinClassCode: string;
  CabinClassText: string;
  MealCode: string;
  JourneyDuration: string;
  Eticket: boolean;
}
export interface SeatsRemaining {
  BelowMinimum: boolean;
  Number: number;
}
export interface StopQuantityInfo {
  ArrivalDateTime: string;
  DepartureDateTime: string;
  Duration: string;
  LocationCode: string;
}
export interface OriginDestinationOption {
  FlightSegment: FlightSegment[];
  StopQuantity: string;
  StopQuantityInfo: StopQuantityInfo;
  SeatsRemaining: SeatsRemaining;
  ResBookDesigCode: string;
  ResBookDesigText: string;
}

export interface OriginDestinationOptions {
  OriginDestinationOption: OriginDestinationOption;
  TotalStops: number;
}

export interface TotalFare {
  Amount: string;
  CurrencyCode: string;
  DecimalPlaces: string;
}
export interface PassengerFare {
  TotalFare: TotalFare;
}
export interface PenaltyDetails {
  ChangePenaltyAmount: string;
  Currency: string;
  RefundPenaltyAmount: string;
  ChangeAllowed: boolean;
  RefundAllowed: boolean;
}
export interface PassengerTypeQuantity {
  Code: string;
  Quantity: number;
}
export interface FareBreakdown {
  Baggage: string[];
  CabinBaggage: string[];
  FareBasisCode: string;
  PassengerFare: PassengerFare;
  PenaltyDetails: PenaltyDetails;
  PassengerTypeQuantity: PassengerTypeQuantity;
}
export interface ItinTotalFares {
  TotalFare: TotalFare;
  TotalTax: TotalFare;
  ServiceTax: TotalFare;
  BaseFare: TotalFare;
}
export interface AirItineraryFareInfo {
  DivideInPartyIndicator: string;
  FareBreakdown: FareBreakdown[];
  FareInfos: [];
  FareSourceCode: string;
  FareType: string;
  IsRefundable: string;
  ItinTotalFares: ItinTotalFares;
  ResultIndex: string;
  SplitItinerary: boolean;
}

export interface FareItinerary {
  AirItineraryFareInfo: AirItineraryFareInfo;
  DirectionInd: string;
  OriginDestinationOptions: OriginDestinationOptions[];
  SequenceNumber: string;
  TicketType: string;
  ValidatingAirlineCode: string;
}

export interface OriginDestinationInfo {
  departureDate: string;
  returnDate?: string;
  airportOriginCode: string | AirportOption;
  airportDestinationCode: string | AirportOption;
}

export interface FlightSearchRequest {
  requiredCurrency: "NGN" | string;
  journeyType: "Return" | "OneWay" | "Multicity" | string;
  class: "Economy" | "First" | string;
  adults: number;
  childs?: number;
  infants?: number;
  OriginDestinationInfo: OriginDestinationInfo[];
}

export interface FlightContextType {
  airItenaryFlightInfo: FareItinerary[];
  setAirItenaryFlightInfo: (newItenaries: FareItinerary[]) => void;
  // sessionID: string;
  // setSessionID: () => void;
}
