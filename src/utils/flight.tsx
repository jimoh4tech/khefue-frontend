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
