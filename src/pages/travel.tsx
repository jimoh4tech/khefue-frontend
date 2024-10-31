import { Flex, Heading, Image, Tabs, Text } from "@chakra-ui/react";
import { FlightSearch } from "../components/flight/flight-search";

export const TravelPage = () => {
  return (
    <Flex direction={"column"}>
      <Flex
        direction="column"
        gap={6}
        py="20"
        color="white"
        justifyContent="center"
        alignItems="center"
        bgImage="url(/images/bg.svg)"
        //   bgPos={"center"}
        bgSize={"cover"}
      >
        <Flex direction="column" alignItems="center" gap={3}>
          <Heading fontWeight="bold" fontSize={["2xl", "4xl"]}>
            Find Next Place To Visit
          </Heading>
          <Text fontSize={["xs", "sm"]}>
            Discover amzaing places at exclusive deals
          </Text>
        </Flex>
        <Tabs.Root
          lazyMount
          unmountOnExit
          defaultValue="flight"
          justify={"center"}
        >
          <Tabs.List>
            <Tabs.Trigger value="flight" color={"gray.100"}>
              Flight
            </Tabs.Trigger>
            <Tabs.Trigger value="hotel" color={"gray.100"}>
              Hotel
            </Tabs.Trigger>
            <Tabs.Trigger value="package" color={"gray.100"}>
              Package
            </Tabs.Trigger>
            <Tabs.Trigger value="car" color={"gray.100"}>
              Car Rentals
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="flight">
            <FlightSearch />
          </Tabs.Content>
          <Tabs.Content value="hotel">Tab 2: Content</Tabs.Content>
          <Tabs.Content value="package">Tab 3: Content</Tabs.Content>
          <Tabs.Content value="car">Tab 4: Content</Tabs.Content>
        </Tabs.Root>
      </Flex>
      <Flex
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        bg={"#F3ECFC"}
        p={20}
        gap={10}
      >
        <Flex
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={3}
        >
          <Heading fontWeight={"bold"} fontSize={"2xl"}>
            Special Offers
          </Heading>
          <Text fontSize={"sm"} color={"gray.500"}>
            These popular destinations have a lot to offer
          </Text>
        </Flex>
        <Flex
          flexWrap={"wrap"}
          gap={5}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Image src="/images/offer1.svg" maxW={"300px"} />
          <Image src="/images/offer2.svg" maxW={"300px"} />
          <Image src="/images/offer3.svg" maxW={"300px"} />
        </Flex>
      </Flex>
    </Flex>
  );
};
