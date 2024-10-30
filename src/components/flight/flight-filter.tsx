import { Flex, Separator, Text } from "@chakra-ui/react";
import { Slider } from "../ui/slider";
import { Checkbox } from "../ui/checkbox";

export const FlightFilter = () => {
  return (
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
  );
};
