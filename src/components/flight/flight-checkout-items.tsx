import { MdAirplaneTicket } from "react-icons/md";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
} from "../ui/accordion";
import { Flex, Input, Separator, Stack, Text } from "@chakra-ui/react";
import { getAirportCityFromCode } from "../../utils/airport-list";
import { formatDateToDayMonth } from "../../utils/date-format";
import { FareItineraries } from "../../interface/flight.interface";
import { FlightInfoCard } from "./flight-move-card";
import { IoPersonSharp } from "react-icons/io5";
import { Field } from "../ui/field";
import { NativeSelectField, NativeSelectRoot } from "../ui/native-select";

export const FlightCheckoutLuggageItem = ({
  fairItenary,
}: {
  fairItenary: FareItineraries;
}) => {
  return (
    <AccordionItem value={"flight"}>
      <AccordionItemTrigger>
        <MdAirplaneTicket size={"35px"} color="gray" />
        <Flex direction={"column"}>
          <Text fontSize={"xs"} fontWeight={"semibold"} color={"gray.800"}>
            {`${getAirportCityFromCode(
              fairItenary?.FareItinerary?.OriginDestinationOptions[0]
                ?.OriginDestinationOption[0]?.FlightSegment
                ?.DepartureAirportLocationCode
            ).slice(0, -5)} to ${getAirportCityFromCode(
              fairItenary?.FareItinerary?.OriginDestinationOptions[0]
                ?.OriginDestinationOption[
                fairItenary?.FareItinerary?.OriginDestinationOptions[0]
                  ?.TotalStops
              ]?.FlightSegment?.ArrivalAirportLocationCode
            ).slice(0, -5)}`}
          </Text>
          <Text fontSize={"x-small"} color={"gray.500"}>
            {`${formatDateToDayMonth(
              fairItenary?.FareItinerary?.OriginDestinationOptions[0]
                ?.OriginDestinationOption[0]?.FlightSegment?.DepartureDateTime
            )} | ${formatDateToDayMonth(
              fairItenary?.FareItinerary?.OriginDestinationOptions[0]
                ?.OriginDestinationOption[
                fairItenary?.FareItinerary?.OriginDestinationOptions[0]
                  ?.TotalStops
              ]?.FlightSegment?.ArrivalDateTime
            )}`}
          </Text>
        </Flex>
      </AccordionItemTrigger>
      <AccordionItemContent>
        {fairItenary?.FareItinerary?.OriginDestinationOptions.map(
          (origin, idx) => (
            <Stack key={idx + Math.random()} gap={5}>
              {origin.OriginDestinationOption.map((sub, i) => (
                <>
                  <FlightInfoCard
                    key={i * (idx + Math.random())}
                    originDestinationOption={sub}
                  />
                  <Separator />
                </>
              ))}
            </Stack>
          )
        )}
      </AccordionItemContent>
    </AccordionItem>
  );
};

export const FlightCheckoutAdultItem = ({ index }: { index: number }) => {
  return (
    <AccordionItem value={`Adult-${index}`}>
      <AccordionItemTrigger>
        <IoPersonSharp size={"35px"} color="gray" />
        <Flex direction={"column"}>
          <Text fontSize={"xs"} fontWeight={"semibold"} color={"gray.800"}>
            {`Adult ${index}`}
          </Text>
          <Text fontSize={"x-small"} color={"gray.500"}>
            +12 years old
          </Text>
        </Flex>
      </AccordionItemTrigger>
      <AccordionItemContent>
        <Flex gap={5} direction={"column"}>
          <Flex justifyContent={"space-between"} w={"full"} gap={10}>
            <Field label="First Name" color={"gray.500"}>
              <Input placeholder="Thomas" bg={"white"} size={"sm"} />
            </Field>
            <Field label="Last Name" color={"gray.500"}>
              <Input placeholder="Smith" bg={"white"} size={"sm"} />
            </Field>
          </Flex>
          <Flex justifyContent={"space-between"} w={"full"} gap={10}>
            <Field label="Email Address" color={"gray.500"}>
              <Input
                placeholder="Thomassmith@google.com"
                bg={"white"}
                size={"sm"}
              />
            </Field>
            <Field label="Phone Number" color={"gray.500"}>
              <Input type="tel" bg={"white"} size={"sm"} />
            </Field>
          </Flex>
          <Flex justifyContent={"space-between"} w={"full"} gap={10}>
            <Field label="Passport Issue Country" color={"gray.500"}>
              <NativeSelectRoot>
                <NativeSelectField
                  name="country"
                  items={[
                    "United Kingdom (UK)",
                    "Canada (CA)",
                    "United States (US)",
                  ]}
                  bg={"white"}
                />
              </NativeSelectRoot>
            </Field>
            <Field label="Date of Birth" color={"gray.500"}>
              <Input type="date" bg={"white"} size={"sm"} />
            </Field>
          </Flex>
          <Flex justifyContent={"space-between"} w={"full"} gap={10}>
            <Field label="Country" color={"gray.500"}>
              <NativeSelectRoot>
                <NativeSelectField
                  name="country"
                  items={[
                    "United Kingdom (UK)",
                    "Canada (CA)",
                    "United States (US)",
                  ]}
                  bg={"white"}
                />
              </NativeSelectRoot>
            </Field>
            <Field label="Title" color={"gray.500"}>
              <NativeSelectRoot>
                <NativeSelectField
                  name="title"
                  items={["Mr", "Mrs", "Miss"]}
                  bg={"white"}
                />
              </NativeSelectRoot>
            </Field>
          </Flex>
          <Flex justifyContent={"space-between"} w={"full"} gap={10}>
            <Field label="Passport Number" color={"gray.500"}>
              <Input placeholder="5467455" bg={"white"} size={"sm"} />
            </Field>
            <Field label="Expiration Date" color={"gray.500"}>
              <Input type="date" bg={"white"} size={"sm"} />
            </Field>
          </Flex>
        </Flex>
      </AccordionItemContent>
    </AccordionItem>
  );
};
