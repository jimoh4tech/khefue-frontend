import { Flex, Separator, Stack, Text } from "@chakra-ui/react";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "../components/ui/accordion";
import { TbLuggage } from "react-icons/tb";
import { useFlightItenary } from "../hooks/flight.hooks";
import { getAirportCityFromCode } from "../utils/airport-list";
import {
  getFlightClassFromCabinCode,
  getPassengerTypeFromCode,
} from "../utils/flight";
import { formatToNaira } from "../utils/currrent-format";
import { Button } from "../components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import {
  FlightCheckoutAdultItem,
  FlightCheckoutLuggageItem,
} from "../components/flight/flight-checkout-items";

export const FlightCheckout = () => {
  const { selectedItenary, airItenaryFlightInfo } = useFlightItenary();
  console.log(
    airItenaryFlightInfo ? airItenaryFlightInfo[selectedItenary] : null
  );
  const fairItenary = airItenaryFlightInfo
    ? airItenaryFlightInfo[selectedItenary]
    : null;
  const travellers: number[] | undefined =
    fairItenary?.FareItinerary?.AirItineraryFareInfo?.FareBreakdown?.map(
      (fare) => fare?.PassengerTypeQuantity.Quantity
    );
  console.log(travellers, [...Array(travellers ? travellers[3] : 0)]);

  if (!fairItenary) return <>This is empty</>;
  return (
    <Flex direction={"column"} py={3} md={{ py: "10" }}>
      <Flex
        p={5}
        gap={5}
        direction={"column-reverse"}
        md={{ flexDirection: "row" }}
      >
        <Flex
          flexShrink={0}
          direction={"column"}
          bg={"#F4ECFF"}
          py={3}
          px={5}
          gap={3}
        >
          <Text fontWeight={"bold"}>My Cart</Text>
          <Text fontSize={"xs"}>Flight tickets</Text>
          {fairItenary?.FareItinerary?.OriginDestinationOptions?.map(
            (origin, idx) => (
              <Stack gap={0} key={idx}>
                <Text fontSize={"xs"} fontWeight={"semibold"}>
                  {`${getAirportCityFromCode(
                    origin?.OriginDestinationOption[0]?.FlightSegment
                      ?.DepartureAirportLocationCode
                  )} to ${getAirportCityFromCode(
                    origin?.OriginDestinationOption[origin?.TotalStops]
                      ?.FlightSegment?.ArrivalAirportLocationCode
                  )}`}
                </Text>
                <Text fontSize={"xs"}>
                  {`${getFlightClassFromCabinCode(
                    origin?.OriginDestinationOption[0]?.FlightSegment
                      ?.CabinClassCode
                  )} : ${fairItenary?.FareItinerary?.DirectionInd}`}
                </Text>
              </Stack>
            )
          )}

          <Separator variant={"dashed"} />
          <Text fontSize={"xs"} fontWeight={"semibold"}>
            Flight Fare Summary
          </Text>
          <Stack gap={1}>
            {fairItenary?.FareItinerary?.AirItineraryFareInfo?.FareBreakdown?.map(
              (fare, idx) => (
                <Text fontSize={"xs"} key={idx}>
                  {`${getPassengerTypeFromCode(
                    fare?.PassengerTypeQuantity?.Code
                  )} x ${fare?.PassengerTypeQuantity.Quantity}`}
                </Text>
              )
            )}
            <Flex justifyContent={"space-between"}>
              <Text fontSize={"xs"}>Base Fare</Text>
              <Text fontSize={"xs"}>
                {formatToNaira(
                  fairItenary?.FareItinerary?.AirItineraryFareInfo
                    ?.ItinTotalFares?.BaseFare?.Amount
                )}
              </Text>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Text fontSize={"xs"}>Discount</Text>
              <Text fontSize={"xs"}>{formatToNaira(0)}</Text>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Text fontSize={"xs"}>Service Charge</Text>
              <Text fontSize={"xs"}>
                {formatToNaira(
                  fairItenary?.FareItinerary?.AirItineraryFareInfo
                    ?.ItinTotalFares?.ServiceTax?.Amount
                )}
              </Text>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Text fontSize={"xs"}>Total Tax</Text>
              <Text fontSize={"xs"}>
                {formatToNaira(
                  fairItenary?.FareItinerary?.AirItineraryFareInfo
                    ?.ItinTotalFares?.TotalTax?.Amount
                )}
              </Text>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Text fontSize={"xs"}>Total Fare</Text>
              <Text fontSize={"xs"}>
                {formatToNaira(
                  fairItenary?.FareItinerary?.AirItineraryFareInfo
                    ?.ItinTotalFares?.TotalFare?.Amount
                )}
              </Text>
            </Flex>
          </Stack>
          <Flex
            justifyContent={"space-between"}
            p={3}
            border={"1px solid gray"}
          >
            <Text fontSize={"xs"}>Total Points</Text>
            <Text fontSize={"xs"}>674</Text>
          </Flex>
        </Flex>
        <Flex flex={1} bg={"#F4ECFF"} py={3} px={5}>
          <AccordionRoot collapsible defaultValue={["b"]}>
            <FlightCheckoutLuggageItem fairItenary={fairItenary} />
            {travellers &&
              travellers[0] &&
              [...Array(travellers ? travellers[1] : 0)]
                .map((_, i) => i + 1)
                .map((val) => (
                  <FlightCheckoutAdultItem value={`Adult ${val}`} />
                ))}
            {travellers &&
              travellers[1] &&
              [...Array(travellers[1])]
                .map((_, i) => i + 1)
                .map((val) => (
                  <FlightCheckoutAdultItem value={`Child ${val}`} />
                ))}
            {travellers &&
              travellers[2] &&
              [...Array(travellers[2])]
                .map((_, i) => i + 1)
                .map((val) => (
                  <FlightCheckoutAdultItem value={`Infact ${val}`} />
                ))}

            <AccordionItem value={"luggage"}>
              <AccordionItemTrigger>
                <TbLuggage size={"35px"} color="gray" />
                <Flex direction={"column"}>
                  <Text
                    fontSize={"xs"}
                    fontWeight={"semibold"}
                    color={"gray.800"}
                  >
                    Luggage
                  </Text>
                  <Text fontSize={"x-small"} color={"gray.500"}>
                    Hand and hold baggage
                  </Text>
                </Flex>
              </AccordionItemTrigger>
              <AccordionItemContent>
                <Flex direction={"column"} gap={3}>
                  <Flex justifyContent={"space-between"} w={"full"}>
                    <Text fontSize={"xs"} color={"gray.700"}>
                      Baggage
                    </Text>
                    <Text fontSize={"xs"} color={"gray.700"}>
                      2PC
                    </Text>
                  </Flex>
                  <Flex justifyContent={"space-between"} w={"full"}>
                    <Text fontSize={"xs"} color={"gray.700"}>
                      Cabin Baggage
                    </Text>
                    <Text fontSize={"xs"} color={"gray.700"}>
                      7KG
                    </Text>
                  </Flex>
                </Flex>
              </AccordionItemContent>
            </AccordionItem>
          </AccordionRoot>
        </Flex>
      </Flex>
      <Flex justifyContent={"flex-end"} px={5}>
        <Button bg={"#370B6F"} color={"white"}>
          Complete Booking and Pay
          <FaArrowRight />
        </Button>
      </Flex>
    </Flex>
  );
};
