import { Box, Flex, Image, Separator, Text } from "@chakra-ui/react";
import { AiFillFacebook } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <Flex direction={"column"} bg={"#28005B"} color={"#d3d7ea"} gap={10}>
      <Flex p={10}>
        <Flex gap={5} justifyContent={"space-between"} w={"full"}>
          <Box>
            <Image src="/images/logo-dark.svg" alt="logo dark" />
          </Box>
          <Flex direction={"column"} gap={5}>
            <Text fontWeight={"semibold"} fontSize={"xs"}>
              Quick Links
            </Text>
            <Flex direction={"column"} gap={3}>
              <Text fontSize={"xs"}>Accessibilty</Text>
              <Text fontSize={"xs"}>Help</Text>
              <Text fontSize={"xs"}>Legal</Text>
              <Text fontSize={"xs"}>Offers</Text>
              <Text fontSize={"xs"}>Reward Activity</Text>
            </Flex>
          </Flex>
          <Flex direction={"column"} gap={5}>
            <Text fontWeight={"semibold"} fontSize={"xs"}>
              Company
            </Text>
            <Flex direction={"column"} gap={3}>
              <Text fontSize={"xs"}>About Us</Text>
              <Text fontSize={"xs"}>Privacy & Security</Text>
              <Text fontSize={"xs"}>Terms and Conditions</Text>
              <Text fontSize={"xs"}>Business Opportunities</Text>
            </Flex>
          </Flex>
          <Flex direction={"column"} gap={5}>
            <Text fontWeight={"semibold"} fontSize={"xs"}>
              Contact
            </Text>
            <Flex direction={"column"} gap={3}>
              <Flex alignItems={"center"} gap={3}>
                <BsTwitter />
                <Text fontSize={"xs"}>Twitter</Text>
              </Flex>
              <Flex alignItems={"center"} gap={3}>
                <RiInstagramFill />
                <Text fontSize={"xs"}>Instagram</Text>
              </Flex>
              <Flex alignItems={"center"} gap={3}>
                <GrLinkedin />
                <Text fontSize={"xs"}>LinkedIn</Text>
              </Flex>
              <Flex alignItems={"center"} gap={3}>
                <AiFillFacebook />
                <Text fontSize={"xs"}>Facebook</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Separator />
      <Flex justifyContent={"center"} alignItems={"center"} pb={10}>
        <Text fontSize={"xs"}>KHUEFE. 2024 All Rights Reserved</Text>
      </Flex>
    </Flex>
  );
};
