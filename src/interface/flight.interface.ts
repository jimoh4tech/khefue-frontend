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
