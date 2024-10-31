import { Collapsible, Flex, FormatNumber, Separator } from "@chakra-ui/react";
import {
  FlightMoveCard,
  FlightResponseBreakdownCard,
} from "./flight-move-card";
import { GoArrowUpRight } from "react-icons/go";
import { Button } from "../ui/button";
import { FareItineraries } from "../../interface/flight.interface";

export const FlightItenaryInfo = ({
  fairItenary,
}: {
  fairItenary: FareItineraries;
}) => {
  console.log(fairItenary, fairItenary?.FareItinerary);
  if (!fairItenary) return <></>;
  return (
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
            <FlightMoveCard fairItenary={fairItenary} />
            {/* <FlightMoveCard /> */}
          </Flex>

          <Separator orientation="vertical" height="28" />
          <Flex direction={"column"} gap={5} alignItems={"end"} flexShrink={0}>
            {/* <Text fontWeight={"bold"} fontSize={"sm"}>
              {
                fairItenary.FareItinerary.AirItineraryFareInfo.ItinTotalFares
                  .TotalFare.Amount
              }
            </Text> */}
            <FormatNumber
              value={Number(
                fairItenary?.FareItinerary?.AirItineraryFareInfo?.ItinTotalFares
                  ?.TotalFare?.Amount || 0
              )}
              style="currency"
              currency="NGN"
            />
            {/* <Text fontSize={"xs"} color={"gray.400"}>
              16 deals
            </Text> */}

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
  );
};
