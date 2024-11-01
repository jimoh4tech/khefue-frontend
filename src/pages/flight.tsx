import { Flex, Separator, Stack, Text } from "@chakra-ui/react";
import { FlightSearch } from "../components/flight/flight-search";
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
import { Skeleton } from "../components/ui/skeleton";
import { EmptyState } from "../components/ui/empty-state";
import { MdFlightTakeoff } from "react-icons/md";

export const FlightSkeleton = () => {
  return (
    <Stack gap={5}>
      <Skeleton height="150px" />
      <Skeleton height="150px" />
      <Skeleton height="150px" />
      <Skeleton height="150px" />
      <Skeleton height="150px" />
    </Stack>
  );
};

export const EmptyFlight = () => {
  return (
    <EmptyState
      icon={<MdFlightTakeoff />}
      title="We couldn't find any result."
      description="Try adjusting your search criteria for more result."
    />
  );
};

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
      <Flex
        py={5}
        px={5}
        lg={{ px: "10" }}
        bg={"gray.50"}
        justifyContent={"center"}
      >
        <FlightSearch />
      </Flex>
      <Flex
        px={5}
        lg={{ px: "10" }}
        direction={"column"}
        md={{ flexDirection: "row" }}
      >
        <FlightFilter />
        <Flex flex={4} direction={"column"} p={2} lg={{ px: "5" }}>
          <Flex direction={"column"} gap={5}>
            <Flex
              justifyContent={"space-between"}
              w={"full"}
              alignItems={"center"}
            >
              <Text fontSize={"sm"} color={"#28005B"}>
                {" "}
                {`${airItenaryFlightInfo?.length || 0} flights found`}
              </Text>

              <NativeSelectRoot size="xs" width="150px">
                <NativeSelectField border={"none"} bgColor={"#e6e4ef"}>
                  <option value="Recommended">Recommended</option>
                  <option value="Price High to Low">Price High to Low</option>
                  <option value="Price Low to High">Price Low to High</option>
                </NativeSelectField>
              </NativeSelectRoot>
            </Flex>
            <Separator />
          </Flex>
          {!airItenaryFlightInfo ? (
            <FlightSkeleton />
          ) : airItenaryFlightInfo.length === 0 ? (
            <EmptyFlight />
          ) : (
            airItenaryFlightInfo?.map((itenary, idx) => (
              <FlightItenaryInfo key={idx} fairItenary={itenary} index={idx} />
            ))
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};
