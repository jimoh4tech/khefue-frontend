import { Collapsible, Flex, Separator, Text } from "@chakra-ui/react";
import {
  FlightMoveCard,
  FlightResponseBreakdownCard,
} from "./flight-move-card";
import { GoArrowUpRight } from "react-icons/go";
import { Button } from "../ui/button";
import { FareItineraries } from "../../interface/flight.interface";
import { formatToNaira } from "../../utils/currrent-format";
import { useNavigate } from "react-router-dom";

export const FlightItenaryInfo = ({
  fairItenary,
}: {
  fairItenary: FareItineraries;
}) => {
  const navigate = useNavigate();
  if (!fairItenary) return <></>;
  return (
    <Flex py={5}>
      <Collapsible.Root w={"full"}>
        <Flex
          justifyContent={"space-between"}
          w={"full"}
          gap={3}
          alignItems={"center"}
          bg={"white"}
          p={2}
          md={{ p: "5" }}
          direction={"column"}
          sm={{ flexDirection: "row" }}
        >
          <Flex direction={"column"} gap={5} flex={4}>
            {fairItenary?.FareItinerary?.OriginDestinationOptions.map(
              (origin, idx) => (
                <FlightMoveCard key={idx} originDestinationOptions={origin} />
              )
            )}
          </Flex>

          <Separator orientation="vertical" height="28" hideBelow={"sm"} />
          <Separator hideFrom={"sm"} />
          <Flex
            gap={5}
            alignItems={"center"}
            sm={{ flexDirection: "column", alignItems: "end" }}
          >
            <Text fontWeight={"bold"} fontSize={"sm"}>
              {formatToNaira(
                fairItenary.FareItinerary.AirItineraryFareInfo.ItinTotalFares
                  .TotalFare.Amount
              )}
            </Text>

            <Text fontSize={"xs"} color={"gray.400"}>
              {fairItenary?.FareItinerary?.AirItineraryFareInfo?.IsRefundable ==
              "No"
                ? "Non Refundable"
                : "Refundable"}
            </Text>

            <Collapsible.Trigger
              p="3"
              bg={"#370B6F"}
              color={"white"}
              fontSize={"sm"}
              borderRadius={"sm"}
              cursor={"pointer"}
            >
              <Flex
                alignItems={"center"}
                gap={2}
                fontWeight={"semibold"}
                fontSize={"xs"}
              >
                View Deal <GoArrowUpRight />
              </Flex>
            </Collapsible.Trigger>
          </Flex>
        </Flex>
        <Collapsible.Content>
          <Flex w={"full"} p={2} direction={"column"} gap={3}>
            {fairItenary.FareItinerary.OriginDestinationOptions.map(
              (origin, idx) => (
                <FlightResponseBreakdownCard
                  key={idx}
                  type={idx}
                  originDestinationOptions={origin}
                />
              )
            )}
            <Flex justifyContent={"end"}>
              <Button
                bg={"#370B6F"}
                color={"white"}
                onClick={() => navigate("/flight/checkout")}
              >
                Book Now <GoArrowUpRight />
              </Button>
            </Flex>
          </Flex>
        </Collapsible.Content>
      </Collapsible.Root>
    </Flex>
  );
};
