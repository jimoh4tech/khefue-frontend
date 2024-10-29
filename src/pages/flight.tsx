import { Collapsible, Flex, For, Separator, Text } from "@chakra-ui/react";
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
import { StepsItem, StepsList, StepsRoot } from "../components/ui/steps";
import { VscCircle } from "react-icons/vsc";
import { useSearchParams } from "react-router-dom";
import { FlightSearchProps } from "../interface/flight.interface";

export const FlightPage = () => {
  const [searchParams] = useSearchParams();
  const init: FlightSearchProps = {
    requiredCurrency: searchParams.get("requiredCurrency") || "NGN",
    journeyType: searchParams.get("journeyType") || "Return",
    departureDate: searchParams.get("departureDate") || "",
    airportOriginCode: searchParams.get("airportOriginCode") || null,
    returnDate: searchParams.get("returnDate") || "",
    airportDestinationCode: searchParams.get("airportDestinationCode") || null,
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
      <Flex py={5} px={10} bg={"gray.50"}>
        <FlightSearch init={init} />
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

                <Separator orientation="vertical" height="25" w={"1"} />
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
                    <Flex alignItems={"center"} gap={2} fontWeight={"semibold"}>
                      View Deal <GoArrowUpRight />
                    </Flex>
                  </Collapsible.Trigger>
                </Flex>
              </Flex>
              <Collapsible.Content>
                <Flex w={"full"} p={2} direction={"column"} gap={3}>
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
                          <StepsItem
                            index={2}
                            icon={<VscCircle size={"10px"} />}
                          />
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
                        Return • Fri, 27 May
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
                          <StepsItem
                            index={2}
                            icon={<VscCircle size={"10px"} />}
                          />
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
