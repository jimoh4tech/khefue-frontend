import React from "react";
import { Box } from "@chakra-ui/react";
import Select, { GroupBase, StylesConfig } from "react-select";
import {
  AirportOption,
  SearchableSelectProps,
} from "../../interface/flight.interface";

// Custom styles for react-select (small size)
const customStyles: StylesConfig<
  AirportOption,
  false,
  GroupBase<AirportOption>
> = {
  control: (provided) => ({
    ...provided,
    minHeight: "32px", // Small height
    fontSize: "12px", // Small font size (xs)
    padding: "0 4px",
    borderColor: "#E2E8F0", // Equivalent to Chakra UI's "gray.200"
    "&:hover": { borderColor: "#3182CE" }, // Equivalent to Chakra UI's "blue.500"
  }),
  option: (provided, state) => ({
    ...provided,
    fontSize: "12px", // Small font size
    backgroundColor: state.isFocused ? "#EBF8FF" : "white", // Equivalent to Chakra UI's "blue.50"
    "&:hover": { backgroundColor: "#BEE3F8" }, // Equivalent to Chakra UI's "blue.100"
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 3,
  }),
  placeholder: (provided) => ({
    ...provided,
    fontSize: "12px", // Placeholder with small font size
  }),
  singleValue: (provided) => ({
    ...provided,
    fontSize: "12px", // Selected value with small font size
  }),
};
// SearchableSelect component
export const SearchableSelect: React.FC<SearchableSelectProps> = ({
  options,
  onChange,
}) => {
  return (
    <Box w="175px" m="10px">
      <Select<AirportOption, false, GroupBase<AirportOption>> // Explicitly set Select type
        options={options}
        placeholder="Select an airport..."
        isSearchable
        onChange={(option) => onChange(option as AirportOption | null)}
        styles={customStyles}
      />
    </Box>
  );
};
