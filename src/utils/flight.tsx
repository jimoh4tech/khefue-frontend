export const getFlightClassFromCabinCode = (code: string) => {
  switch (code) {
    case "Y":
      return "Economy";
    case "S":
      return "Premium Economy";
    case "C":
      return "Business";
    case "F":
      return "First";

    default:
      return "Invalid";
  }
};
export const getPassengerTypeFromCode = (code: string) => {
  switch (code) {
    case "ADT":
      return "Adult";
    case "CHD":
      return "Child";
    case "INF":
      return "Infact";

    default:
      return "Invalid";
  }
};
export const getAgeBracketValue = (group: string) => {
  switch (group.slice(0, -2)) {
    case "Adult":
      return "12+ years old";
    case "Child":
      return "(2 - 12) years old";
    case "Infact":
      return "Below 2 years old";

    default:
      return "Invalid";
  }
};
export const getTitleArray = (group: string) => {
  switch (group.slice(0, -2)) {
    case "Adult":
      return ["Mr", "Mrs", "Miss"];
    case "Child":
      return ["Master", "Mis"];
    case "Infact":
      return ["Master", "Mis"];

    default:
      return [];
  }
};
