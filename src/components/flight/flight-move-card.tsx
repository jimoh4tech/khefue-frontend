import { Flex, Separator, Text } from "@chakra-ui/react";
import { Avatar } from "../ui/avatar";
import { StepsItem, StepsList, StepsRoot } from "../ui/steps";
import { VscCircle } from "react-icons/vsc";
import { OriginDestinationOptions } from "../../interface/flight.interface";

export const FlightMoveCard = ({
  originDestinationOptions,
}: {
  originDestinationOptions: OriginDestinationOptions;
}) => {
  console.log({ originDestinationOptions });
  return (
    <Flex justifyContent={"space-between"} w={"full"} gap={5}>
      <Avatar name="Segun Adebayo" src="/images/res.svg" />
      <Flex direction={"column"} gap={2} alignItems={"center"}>
        <Text fontSize={"xs"} fontWeight={"bold"}>
          {
            originDestinationOptions?.OriginDestinationOption[0]?.FlightSegment
              .DepartureDateTime
          }
        </Text>
        <Text fontSize={"xs"} color={"gray.400"}>
          {
            originDestinationOptions?.OriginDestinationOption[0]?.FlightSegment
              .DepartureAirportLocationCode
          }
        </Text>
      </Flex>
      <Flex
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Separator w="xs" />
        <Text fontSize={"xs"}>Nonstop</Text>
      </Flex>
      <Flex direction={"column"} gap={2} alignItems={"center"}>
        <Text fontSize={"xs"} fontWeight={"bold"}>
          22:00
        </Text>
        <Text fontSize={"xs"} color={"gray.400"}>
          STN
        </Text>
      </Flex>
      <Text fontSize={"xs"} w={"10"}>
        4h 05m
      </Text>
    </Flex>
  );
};

export const FlightResponseBreakdownCard = () => {
  return (
    <Flex
      w={"full"}
      border={"1px solid"}
      borderColor={"gray.300"}
      p={3}
      gap={5}
      direction={"column"}
      bg={"white"}
      borderRadius={"sm"}
    >
      <Flex justifyContent={"space-between"} w={"full"}>
        <Text fontWeight={"bold"} fontSize={"sm"}>
          Depart • Sat, Mar 26
        </Text>
        <Text fontSize={"sm"} color={"gray.400"}>
          4h 05m
        </Text>
      </Flex>
      <Separator />
      <Flex>
        <StepsRoot
          defaultValue={1}
          count={3}
          orientation="vertical"
          height="200px"
          flex={1}
        >
          <StepsList>
            <StepsItem
              index={0}
              icon={
                <Avatar
                  name="Segun Adebayo"
                  src="/images/res.svg"
                  size={"xs"}
                  p={1}
                />
              }
            />
            <StepsItem
              index={1}
              icon={
                <Avatar
                  name="Segun Adebayo"
                  src="/images/plane.svg"
                  size={"xs"}
                  p={2}
                />
              }
            />
            <StepsItem index={2} icon={<VscCircle size={"10px"} />} />
          </StepsList>
        </StepsRoot>
        <Flex flex={8} w={"full"} direction={"column"} gap={5}>
          <Flex justifyContent={"space-between"} w={"full"}>
            <Text fontSize={"sm"} color={"gray.400"}>
              Pegasus Airlines 1169
            </Text>
            <Text fontSize={"sm"} color={"gray.400"}>
              Economy
            </Text>
          </Flex>
          <Flex justifyContent={"space-between"} w={"full"}>
            <Text fontWeight={"semibold"} fontSize={"sm"}>
              8:25 am Istanbul Sabiha Gokcen (SAW)
            </Text>
            <Text fontWeight={"semibold"} fontSize={"sm"}>
              Airbus A320neo (Narrow-body jet)
            </Text>
          </Flex>
          <Flex justifyContent={"space-between"} w={"full"}>
            <Text fontSize={"sm"} color={"gray.400"}>
              4h 05m
            </Text>
            <Text fontWeight={"semibold"} fontSize={"sm"}>
              Wi-Fi available
            </Text>
          </Flex>
          <Flex justifyContent={"space-between"} w={"full"}>
            <Text fontWeight={"semibold"} fontSize={"sm"}>
              9:30 am London Stansted (STN)
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};