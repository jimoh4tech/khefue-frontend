import { Box, Flex, For, Separator, Text } from "@chakra-ui/react";
import {
  BreadcrumbCurrentLink,
  BreadcrumbLink,
  BreadcrumbRoot,
} from "../components/ui/breadcrumb";
import { FlightSearch } from "../components/flight/flight-search";
import { Slider } from "../components/ui/slider";
import { Checkbox } from "../components/ui/checkbox";
import { Button } from "../components/ui/button";
import {
  NativeSelectField,
  NativeSelectRoot,
} from "../components/ui/native-select";

export const FlightPage = () => {
  return (
    <Flex direction="column">
      <BreadcrumbRoot bg={"#F4ECFF"} py={5} px={10}>
        <BreadcrumbLink href="#">Choose departing flight</BreadcrumbLink>
        <BreadcrumbLink href="#">Choose returning flight </BreadcrumbLink>
        <BreadcrumbLink href="#">Review your trip </BreadcrumbLink>
        <BreadcrumbCurrentLink>Choose pricing option</BreadcrumbCurrentLink>
      </BreadcrumbRoot>
      <Flex py={5} px={10} bg={"gray.50"}>
        <FlightSearch />
      </Flex>
      <Flex px={10}>
        <Flex flex={1} direction={"column"} bg={"white"}>
          <Flex direction={"column"} p={5} gap={3}>
            <Text fontSize={"xs"} color={"#370B6F"}>
              Price
            </Text>
            <Flex justifyContent={"space-between"}>
              <Text fontSize={"xs"}>N0</Text>
              <Text fontSize={"xs"}>N1000</Text>
            </Flex>
            <Slider defaultValue={[40]} size="sm" color={"#370B6F"} />
          </Flex>
          <Separator />
          <Flex direction={"column"} p={5} gap={3}>
            <Text fontSize={"xs"} color={"#370B6F"}>
              Stops
            </Text>
            <Flex justifyContent={"space-between"}>
              <Checkbox color={"#370B6F"} size={"xs"}>
                Nonstop
              </Checkbox>
              <Text fontSize={"xs"}>$43</Text>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Checkbox color={"#370B6F"} size={"xs"}>
                1 Stop
              </Checkbox>
              <Text fontSize={"xs"}>$58</Text>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Checkbox color={"#370B6F"} size={"xs"}>
                2+ Stops
              </Checkbox>
              <Text fontSize={"xs"}>$63</Text>
            </Flex>
          </Flex>
          <Separator />
          <Flex direction={"column"} p={5} gap={3}>
            <Text fontSize={"xs"} color={"#370B6F"}>
              Cabin
            </Text>
            <Flex justifyContent={"space-between"}>
              <Checkbox color={"#370B6F"} size={"xs"}>
                Basic Economy
              </Checkbox>
              <Text fontSize={"xs"}>$43</Text>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Checkbox color={"#370B6F"} size={"xs"}>
                Economy
              </Checkbox>
              <Text fontSize={"xs"}>$58</Text>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Checkbox color={"#370B6F"} size={"xs"}>
                Mixed
              </Checkbox>
              <Text fontSize={"xs"}>$63</Text>
            </Flex>
          </Flex>
          <Separator />
          <Flex direction={"column"} p={5} gap={3}>
            <Text fontSize={"xs"} color={"#370B6F"}>
              Airlines
            </Text>
            <Flex justifyContent={"space-between"}>
              <Checkbox color={"#370B6F"} size={"xs"}>
                Air France
              </Checkbox>
              <Text fontSize={"xs"}>$43</Text>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Checkbox color={"#370B6F"} size={"xs"}>
                Aer Lingus
              </Checkbox>
              <Text fontSize={"xs"}>$58</Text>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Checkbox color={"#370B6F"} size={"xs"}>
                Air Canada
              </Checkbox>
              <Text fontSize={"xs"}>$63</Text>
            </Flex>
          </Flex>
          <Separator />
          <Flex direction={"column"} p={5} gap={3}>
            <Text fontSize={"xs"} color={"#370B6F"}>
              Duration
            </Text>
            <Flex justifyContent={"space-between"}>
              <Text fontSize={"xs"}>1h 30m</Text>
              <Text fontSize={"xs"}>6h 30m</Text>
            </Flex>
            <Slider defaultValue={[50]} size="sm" />
          </Flex>
          <Separator />
        </Flex>
        <Flex flex={4} direction={"column"} p={5}>
          <Flex direction={"column"} gap={5}>
            <Flex justifyContent={"space-between"} w={"full"}>
              <Text>4 Fligt search</Text>
              <Button colorScheme={"light"}>
                Please Secure booking within 29:45
              </Button>
              <NativeSelectRoot size="sm" width="240px">
                <NativeSelectField>
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
                ]}
              >
                {(item, index) => (
                  <Flex
                    borderWidth="1px"
                    key={index}
                    p="5"
                    bg={"#A4A4A4"}
                    borderRadius={"md"}
                    alignItems={"center"}
                    direction={"column"}
                  >
                    <Text>{item.date}</Text>
                    <Text color="fg.muted">{item.price}</Text>
                  </Flex>
                )}
              </For>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
