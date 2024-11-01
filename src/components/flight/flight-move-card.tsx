import { Flex, Image, Separator, Text } from "@chakra-ui/react";
import { Avatar } from "../ui/avatar";
import { StepsItem, StepsList, StepsRoot } from "../ui/steps";
import { VscCircle } from "react-icons/vsc";
import {
  OriginDestinationOption,
  OriginDestinationOptions,
} from "../../interface/flight.interface";
import {
  formatDateIntervalToHours,
  formatDateTo12Time,
  formatDateToDayMonth,
  formatDateToTime,
} from "../../utils/date-format";
import { getFlightClassFromCabinCode } from "../../utils/flight";
import { getAirportDetailsFromCode } from "../../utils/airport-list";
import { getAirLineImageUrl } from "../../utils/airline-list";

export const FlightMoveCard = ({
  originDestinationOptions,
}: {
  originDestinationOptions: OriginDestinationOptions;
}) => {
  return (
    <Flex justifyContent={"space-between"} w={"full"} gap={5}>
      <Image
        src={`${getAirLineImageUrl(
          originDestinationOptions?.OriginDestinationOption[0]?.FlightSegment
            ?.MarketingAirlineName
        )}`}
        w={"90px"}
        hideBelow={"sm"}
      />
      <Flex direction={"column"} gap={2} alignItems={"center"}>
        <Text fontSize={"xs"} fontWeight={"bold"}>
          {formatDateToTime(
            originDestinationOptions?.OriginDestinationOption[0]?.FlightSegment
              ?.DepartureDateTime
          )}
        </Text>
        <Text fontSize={"xs"} color={"gray.400"}>
          {
            originDestinationOptions?.OriginDestinationOption[0]?.FlightSegment
              ?.DepartureAirportLocationCode
          }
        </Text>
      </Flex>
      <Flex
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Separator w="20" />
        <Text fontSize={"xs"}>{`${
          originDestinationOptions?.TotalStops == 0
            ? "Nonstop"
            : originDestinationOptions?.TotalStops == 1
            ? originDestinationOptions?.TotalStops + " Stop"
            : originDestinationOptions?.TotalStops + " Stops"
        }`}</Text>
      </Flex>
      <Flex direction={"column"} gap={2} alignItems={"center"}>
        <Text fontSize={"xs"} fontWeight={"bold"}>
          {formatDateToTime(
            originDestinationOptions?.OriginDestinationOption[
              originDestinationOptions?.TotalStops || 0
            ]?.FlightSegment?.ArrivalDateTime
          )}
        </Text>
        <Text fontSize={"xs"} color={"gray.400"}>
          {
            originDestinationOptions?.OriginDestinationOption[
              originDestinationOptions?.TotalStops || 0
            ]?.FlightSegment?.ArrivalAirportLocationCode
          }
        </Text>
      </Flex>
      <Text fontSize={"xs"} w={"12"}>
        {formatDateIntervalToHours(
          originDestinationOptions?.OriginDestinationOption[0]?.FlightSegment
            ?.DepartureDateTime,
          originDestinationOptions?.OriginDestinationOption[
            originDestinationOptions?.TotalStops || 0
          ]?.FlightSegment?.ArrivalDateTime
        )}
      </Text>
    </Flex>
  );
};

export const FlightInfoCard = ({
  originDestinationOption,
}: {
  originDestinationOption: OriginDestinationOption;
}) => {
  return (
    <Flex flex={8} w={"full"} direction={"column"} gap={5}>
      <Flex justifyContent={"space-between"} w={"full"}>
        <Text fontSize={"sm"} color={"gray.400"}>
          {`${originDestinationOption?.FlightSegment?.MarketingAirlineName} ${originDestinationOption?.FlightSegment?.FlightNumber}`}
        </Text>
        <Text fontSize={"sm"} color={"gray.400"}>
          {getFlightClassFromCabinCode(
            originDestinationOption?.FlightSegment?.CabinClassCode
          )}
        </Text>
      </Flex>
      <Flex justifyContent={"space-between"} w={"full"}>
        <Text fontWeight={"semibold"} fontSize={"xs"}>
          {`${formatDateTo12Time(
            originDestinationOption?.FlightSegment?.DepartureDateTime
          )} ${getAirportDetailsFromCode(
            originDestinationOption?.FlightSegment?.DepartureAirportLocationCode
          )}`}
        </Text>
      </Flex>
      <Flex justifyContent={"space-between"} w={"full"}>
        <Text fontSize={"sm"} color={"gray.400"}>
          {formatDateIntervalToHours(
            originDestinationOption?.FlightSegment?.DepartureDateTime,
            originDestinationOption?.FlightSegment?.ArrivalDateTime
          )}
        </Text>
        <Text fontWeight={"semibold"} fontSize={"xs"}>
          {originDestinationOption?.FlightSegment?.Eticket ? "Eticket" : ""}
        </Text>
      </Flex>
      <Flex justifyContent={"space-between"} w={"full"}>
        <Text fontWeight={"semibold"} fontSize={"xs"}>
          {`${formatDateTo12Time(
            originDestinationOption?.FlightSegment?.ArrivalDateTime
          )} ${getAirportDetailsFromCode(
            originDestinationOption?.FlightSegment?.ArrivalAirportLocationCode
          )}`}
        </Text>
      </Flex>
    </Flex>
  );
};

export const FlightSegementCard = ({
  originDestinationOption,
}: {
  originDestinationOption: OriginDestinationOption;
}) => {
  return (
    <Flex>
      <StepsRoot
        defaultValue={1}
        count={3}
        orientation="vertical"
        height="200px"
        flex={1}
        hideBelow={"sm"}
      >
        <StepsList>
          <StepsItem
            index={0}
            icon={
              <Avatar
                src={`${getAirLineImageUrl(
                  originDestinationOption?.FlightSegment?.MarketingAirlineName
                )}`}
                size={"xs"}
                p={1}
              />
            }
          />
          <StepsItem
            index={1}
            icon={<Avatar src="/images/plane.svg" size={"xs"} p={2} />}
          />
          <StepsItem index={2} icon={<VscCircle size={"10px"} />} />
        </StepsList>
      </StepsRoot>
      <FlightInfoCard originDestinationOption={originDestinationOption} />
      {/* <Flex flex={8} w={"full"} direction={"column"} gap={5}>
        <Flex justifyContent={"space-between"} w={"full"}>
          <Text fontSize={"sm"} color={"gray.400"}>
            {`${originDestinationOption?.FlightSegment?.MarketingAirlineName} ${originDestinationOption?.FlightSegment?.FlightNumber}`}
          </Text>
          <Text fontSize={"sm"} color={"gray.400"}>
            {getFlightClassFromCabinCode(
              originDestinationOption?.FlightSegment?.CabinClassCode
            )}
          </Text>
        </Flex>
        <Flex justifyContent={"space-between"} w={"full"}>
          <Text fontWeight={"semibold"} fontSize={"xs"}>
            {`${formatDateTo12Time(
              originDestinationOption?.FlightSegment?.DepartureDateTime
            )} ${getAirportDetailsFromCode(
              originDestinationOption?.FlightSegment
                ?.DepartureAirportLocationCode
            )}`}
          </Text>
        </Flex>
        <Flex justifyContent={"space-between"} w={"full"}>
          <Text fontSize={"sm"} color={"gray.400"}>
            {formatDateIntervalToHours(
              originDestinationOption?.FlightSegment?.DepartureDateTime,
              originDestinationOption?.FlightSegment?.ArrivalDateTime
            )}
          </Text>
          <Text fontWeight={"semibold"} fontSize={"xs"}>
            {originDestinationOption?.FlightSegment?.Eticket ? "Eticket" : ""}
          </Text>
        </Flex>
        <Flex justifyContent={"space-between"} w={"full"}>
          <Text fontWeight={"semibold"} fontSize={"xs"}>
            {`${formatDateTo12Time(
              originDestinationOption?.FlightSegment?.ArrivalDateTime
            )} ${getAirportDetailsFromCode(
              originDestinationOption?.FlightSegment?.ArrivalAirportLocationCode
            )}`}
          </Text>
        </Flex>
      </Flex> */}
    </Flex>
  );
};

export const FlightResponseBreakdownCard = ({
  originDestinationOptions,
  type,
}: {
  originDestinationOptions: OriginDestinationOptions;
  type: number;
}) => {
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
        <Text fontWeight={"bold"} fontSize={"xs"} sm={{ fontSize: "sm" }}>
          {`${type === 0 ? "Depart" : "Return"} • ${formatDateToDayMonth(
            originDestinationOptions?.OriginDestinationOption[0]?.FlightSegment
              ?.DepartureDateTime
          )}`}
        </Text>
        <Text fontSize={"xs"} sm={{ fontSize: "sm" }} color={"gray.400"}>
          {formatDateIntervalToHours(
            originDestinationOptions?.OriginDestinationOption[0]?.FlightSegment
              ?.DepartureDateTime,
            originDestinationOptions?.OriginDestinationOption[
              originDestinationOptions?.TotalStops || 0
            ]?.FlightSegment?.ArrivalDateTime
          )}
        </Text>
      </Flex>
      {originDestinationOptions.OriginDestinationOption.map((origin, idx) => (
        <Flex gap={5} direction={"column"} key={idx}>
          <Separator />
          <FlightSegementCard originDestinationOption={origin} />
        </Flex>
      ))}
    </Flex>
  );
};
