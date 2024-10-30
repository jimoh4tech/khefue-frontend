import { Flex, For, Separator, Text } from "@chakra-ui/react";
import {
  BreadcrumbCurrentLink,
  BreadcrumbLink,
  BreadcrumbRoot,
} from "../components/ui/breadcrumb";
import { FlightSearch } from "../components/flight/flight-search";
import { Button } from "../components/ui/button";
import {
  NativeSelectField,
  NativeSelectRoot,
} from "../components/ui/native-select";
import { useSearchParams } from "react-router-dom";
import {
  AirportOption,
  FlightSearchProps,
} from "../interface/flight.interface";
import { FlightFilter } from "../components/flight/flight-filter";
import { FlightItenaryInfo } from "../components/flight/flight-itenary-info";
import { useFlightItenary } from "../hooks/flight.hooks";

export const FlightPage = () => {
  const [searchParams] = useSearchParams();
  const { airItenaryFlightInfo } = useFlightItenary();
  // const [sessionID, setSessionID] = useState("");
  // const [];
  const init: FlightSearchProps = {
    requiredCurrency: searchParams.get("requiredCurrency") || "NGN",
    journeyType: searchParams.get("journeyType") || "Return",
    departureDate: searchParams.get("departureDate") || "",
    airportOriginCode:
      (searchParams.get("airportOriginCode") as unknown as AirportOption) ||
      null,
    returnDate: searchParams.get("returnDate") || "",
    airportDestinationCode:
      (searchParams.get(
        "airportDestinationCode"
      ) as unknown as AirportOption) || null,
    class: searchParams.get("class") || "Economy",
    adults: searchParams.get("adults") || "1",
    childs: searchParams.get("childs") || "1",
    infants: searchParams.get("infants") || "1",
  };

  console.log(init);
  return (
    <Flex direction="column">
      <BreadcrumbRoot bg={"#F4ECFF"} py={5} px={10}>
        <BreadcrumbLink href="#">Choose departing flight</BreadcrumbLink>
        <BreadcrumbLink href="#">Choose returning flight </BreadcrumbLink>
        <BreadcrumbLink href="#">Review your trip </BreadcrumbLink>
        <BreadcrumbCurrentLink>Choose pricing option</BreadcrumbCurrentLink>
      </BreadcrumbRoot>
      <Flex py={5} px={10} bg={"gray.50"} justifyContent={"center"}>
        <FlightSearch init={init} />
      </Flex>
      <Flex px={10}>
        <FlightFilter />
        <Flex flex={4} direction={"column"} p={5}>
          <Flex direction={"column"} gap={5}>
            <Flex
              justifyContent={"space-between"}
              w={"full"}
              alignItems={"center"}
            >
              <Text fontSize={"sm"}>4 Fligt search</Text>
              <Button bgColor={"#e6e4ef"} color={"black"}>
                Please Secure booking within 29:45
              </Button>
              <NativeSelectRoot size="sm" width="240px">
                <NativeSelectField border={"none"} bgColor={"#e6e4ef"}>
                  <option value="Recommended">Recommended</option>
                  <option value="Price High to Low">Price High to Low</option>
                  <option value="Price Low to High">Price Low to High</option>
                </NativeSelectField>
              </NativeSelectRoot>
            </Flex>
            <Separator />
            <Flex gap={3}>
              <For
                each={[
                  { date: "Mon 13, 2012", price: 34.22 },
                  { date: "Mon 13, 2012", price: 44.53 },
                  { date: "Mon 13, 2012", price: 56.45 },
                  { date: "Mon 13, 2012", price: 56.45 },
                  { date: "Mon 13, 2012", price: 56.45 },
                  { date: "Mon 13, 2012", price: 56.45 },
                ]}
              >
                {(item, index) => (
                  <Flex
                    borderWidth="1px"
                    key={index}
                    p="5"
                    bg={"#e6e4ef"}
                    borderRadius={"md"}
                    alignItems={"center"}
                    direction={"column"}
                    cursor={"pointer"}
                  >
                    <Text>{item.date}</Text>
                    <Text color="fg.muted">{item.price}</Text>
                  </Flex>
                )}
              </For>
            </Flex>
          </Flex>
          <FlightItenaryInfo fairItenary={airItenaryFlightInfo[0]} />
        </Flex>
      </Flex>
    </Flex>
  );
};
