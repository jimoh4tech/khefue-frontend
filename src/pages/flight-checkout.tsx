import { Flex, Separator, Stack, Text } from "@chakra-ui/react";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "../components/ui/accordion";
import { MdAirlineSeatReclineNormal, MdAirplaneTicket } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { TbLuggage } from "react-icons/tb";

export const FlightCheckout = () => {
  return (
    <Flex p={5} gap={5}>
      <Flex flex={1} direction={"column"} bg={"#F4ECFF"} py={3} px={5} gap={3}>
        <Text fontWeight={"bold"}>My Cart</Text>
        <Text fontSize={"xs"}>Flight tickets</Text>
        <Stack gap={0}>
          <Text fontSize={"xs"} fontWeight={"semibold"}>
            Lagos (LOS) to New York (JFK)
          </Text>
          <Text fontSize={"xs"}>Economy: Round Trip</Text>
        </Stack>
        <Stack gap={0}>
          <Text fontSize={"xs"} fontWeight={"semibold"}>
            New York (JFK) to Lagos (LOS)
          </Text>
          <Text fontSize={"xs"}>Economy: Round Trip</Text>
        </Stack>
        <Separator variant={"dashed"} />
        <Text fontSize={"xs"} fontWeight={"semibold"}>
          Flight Fare Summary
        </Text>
        <Stack gap={1}>
          <Text fontSize={"xs"}>Adult x 1</Text>
          <Flex justifyContent={"space-between"}>
            <Text fontSize={"xs"}>Base Fare</Text>
            <Text fontSize={"xs"}>₦2,180,494</Text>
          </Flex>
          <Flex justifyContent={"space-between"}>
            <Text fontSize={"xs"}>Discount</Text>
            <Text fontSize={"xs"}>₦0</Text>
          </Flex>
          <Flex justifyContent={"space-between"}>
            <Text fontSize={"xs"}>Service Charge</Text>
            <Text fontSize={"xs"}>₦0</Text>
          </Flex>
          <Flex justifyContent={"space-between"}>
            <Text fontSize={"xs"}>Total Fare</Text>
            <Text fontSize={"xs"}>₦2,180,494</Text>
          </Flex>
        </Stack>
        <Flex justifyContent={"space-between"} p={3} border={"1px solid gray"}>
          <Text fontSize={"xs"}>Total Points</Text>
          <Text fontSize={"xs"}>₦2,180,494</Text>
        </Flex>
      </Flex>
      <Flex flex={4} bg={"#F4ECFF"} py={3} px={5}>
        <AccordionRoot collapsible defaultValue={["b"]}>
          <AccordionItem value={"flight"}>
            <AccordionItemTrigger>
              <MdAirplaneTicket size={"35px"} color="gray" />
              <Flex direction={"column"}>
                <Text
                  fontSize={"xs"}
                  fontWeight={"semibold"}
                  color={"gray.800"}
                >
                  Lagos - New York
                </Text>
                <Text fontSize={"x-small"} color={"gray.500"}>
                  Fri May 17 LKPR - Madekyt | Fri May 31 EKYT - LKPR
                </Text>
              </Flex>
            </AccordionItemTrigger>
            <AccordionItemContent>{"This si"}</AccordionItemContent>
          </AccordionItem>
          <AccordionItem value={"adult1"}>
            <AccordionItemTrigger>
              <IoPersonSharp size={"35px"} color="gray" />
              <Flex direction={"column"}>
                <Text
                  fontSize={"xs"}
                  fontWeight={"semibold"}
                  color={"gray.800"}
                >
                  Adult 1
                </Text>
                <Text fontSize={"x-small"} color={"gray.500"}>
                  +12 years old
                </Text>
              </Flex>
            </AccordionItemTrigger>
            <AccordionItemContent>{"This si"}</AccordionItemContent>
          </AccordionItem>
          <AccordionItem value={"adult2"}>
            <AccordionItemTrigger>
              <IoPersonSharp size={"35px"} color="gray" />
              <Flex direction={"column"}>
                <Text
                  fontSize={"xs"}
                  fontWeight={"semibold"}
                  color={"gray.800"}
                >
                  Adult 2
                </Text>
                <Text fontSize={"x-small"} color={"gray.500"}>
                  +12 years old
                </Text>
              </Flex>
            </AccordionItemTrigger>
            <AccordionItemContent>{"This si"}</AccordionItemContent>
          </AccordionItem>
          <AccordionItem value={"luggae"}>
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
            <AccordionItemContent>{"This si"}</AccordionItemContent>
          </AccordionItem>
          <AccordionItem value={"seat"}>
            <AccordionItemTrigger>
              <MdAirlineSeatReclineNormal size={"35px"} color="gray" />
              <Flex direction={"column"}>
                <Text
                  fontSize={"xs"}
                  fontWeight={"semibold"}
                  color={"gray.800"}
                >
                  Select seats
                </Text>
                <Text fontSize={"x-small"} color={"gray.500"}>
                  Choose your seats
                </Text>
              </Flex>
            </AccordionItemTrigger>
            <AccordionItemContent>{"This si"}</AccordionItemContent>
          </AccordionItem>
        </AccordionRoot>
      </Flex>
    </Flex>
  );
};
