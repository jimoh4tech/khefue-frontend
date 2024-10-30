import { Collapsible, Flex, For, Separator, Text } from "@chakra-ui/react";
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
import { GoArrowUpRight } from "react-icons/go";
import { useSearchParams } from "react-router-dom";
import {
  AirportOption,
  FareItinerary,
  FlightSearchProps,
} from "../interface/flight.interface";
import {
  FlightMoveCard,
  FlightResponseBreakdownCard,
} from "../components/flight/flight-move-card";
import { FlightFilter } from "../components/flight/flight-filter";
import { useState } from "react";

export const FlightPage = () => {
  const [searchParams] = useSearchParams();
  const [airItenaryFlightInfo, setAirItenaryFlightInfo] = useState<
    FareItinerary[]
  >([]);
  const [sessionID, setSessionID] = useState("");
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
        <FlightSearch
          init={init}
          setAirItenaryFlightInfo={setAirItenaryFlightInfo}
        />
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
          <Flex px={1} py={5}>
            <Collapsible.Root w={"full"}>
              <Flex
                justifyContent={"space-between"}
                w={"full"}
                gap={3}
                alignItems={"center"}
                bg={"white"}
                p={5}
              >
                <Flex direction={"column"} gap={5} flex={1}>
                  <FlightMoveCard />
                  <FlightMoveCard />
                </Flex>

                <Separator orientation="vertical" height="28" />
                <Flex
                  direction={"column"}
                  gap={5}
                  alignItems={"end"}
                  flexShrink={0}
                >
                  <Text fontWeight={"bold"} fontSize={"sm"}>
                    24 pts or ₦72
                  </Text>
                  <Text fontSize={"xs"} color={"gray.400"}>
                    16 deals
                  </Text>

                  <Collapsible.Trigger
                    p="3"
                    bg={"#370B6F"}
                    color={"white"}
                    fontSize={"sm"}
                    borderRadius={"sm"}
                    cursor={"pointer"}
                  >
                    <Flex alignItems={"center"} gap={2} fontWeight={"semibold"}>
                      View Deal <GoArrowUpRight />
                    </Flex>
                  </Collapsible.Trigger>
                </Flex>
              </Flex>
              <Collapsible.Content>
                <Flex w={"full"} p={2} direction={"column"} gap={3}>
                  <FlightResponseBreakdownCard />
                  <FlightResponseBreakdownCard />
                  <Flex justifyContent={"end"}>
                    <Button bg={"#370B6F"} color={"white"}>
                      Book Now <GoArrowUpRight />
                    </Button>
                  </Flex>
                </Flex>
              </Collapsible.Content>
            </Collapsible.Root>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
