import {  Collapsible, Flex, For, Separator, Text } from "@chakra-ui/react";
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
import { Avatar } from "../components/ui/avatar";
import { GoArrowUpRight } from "react-icons/go";

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
            <Collapsible.Root>
              <Flex
                justifyContent={"space-between"}
                w={"full"}
                gap={5}
                alignItems={"center"}
                bg={"white"}
                p={5}
              >
                <Flex direction={"column"} gap={5}>
                  <Flex justifyContent={"space-between"} w={"full"} gap={5}>
                    <Avatar name="Segun Adebayo" src="/images/res.svg" />
                    <Flex direction={"column"} gap={2} alignItems={"center"}>
                      <Text fontSize={"xs"} fontWeight={"bold"}>
                        14:00
                      </Text>
                      <Text fontSize={"xs"} color={"gray.400"}>
                        SAW
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
                  <Flex justifyContent={"space-between"} w={"full"} gap={5}>
                    <Avatar name="Segun Adebayo" src="/images/res.svg" />
                    <Flex direction={"column"} gap={2} alignItems={"center"}>
                      <Text fontSize={"xs"} fontWeight={"bold"}>
                        14:00
                      </Text>
                      <Text fontSize={"xs"} color={"gray.400"}>
                        SAW
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
                </Flex>

                <Separator orientation="vertical" height="25" />
                <Flex direction={"column"} gap={5} alignItems={"end"}>
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
                    <Flex alignItems={"center"} gap={2}>
                      View Deal <GoArrowUpRight />
                    </Flex>
                  </Collapsible.Trigger>
                </Flex>
              </Flex>
              <Collapsible.Content>
                <Flex>
                  <Flex>
                    <Flex>
                      <Text fontWeight={"bold"} fontSize={"sm"}>
                        Depart • Sat, Mar 26
                      </Text>
                      <Text fontSize={"xs"} color={"gray.400"}>
                        4h 05m
                      </Text>
                    </Flex>
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
