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
