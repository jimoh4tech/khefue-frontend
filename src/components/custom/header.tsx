import { Box, Flex, For, Image, Input } from "@chakra-ui/react";
import { InputGroup } from "../ui/input-group";
import { LuMenu, LuSearch } from "react-icons/lu";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Avatar } from "../ui/avatar";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Flex flexDir="column">
      <Flex
        justify="space-between"
        w="full"
        px={5}
        py={5}
        md={{ px: "10" }}
        borderTopRadius="2xl"
        bg="white"
        alignItems={"center"}
      >
        <Box w={"150px"}>
          <Image src="/images/logo.png" alt="Khefue Logo" />
        </Box>
        <Box hideFrom={"md"}>
          <LuMenu size="32px" color="#28005B" />
        </Box>
        <Flex alignItems="center" gap={4} hideBelow={"md"}>
          {" "}
          <InputGroup flex="1" startElement={<LuSearch />}>
            <Input
              placeholder="Search something"
              rounded="3xl"
              border="none"
              bg="gray.100"
            />
          </InputGroup>
          <MdOutlineNotificationsActive size="20px" cursor="pointer" />
          <HiOutlineShoppingCart size="20px" cursor="pointer" />
          <Avatar
            size="sm"
            name="Sage"
            src="https://bit.ly/sage-adebayo"
            cursor="pointer"
          />
        </Flex>
      </Flex>
      <Flex bg="#370B6F" gapX={8} px="10" py={3} color="white" hideBelow={"md"}>
        <For
          each={[
            { label: "Home", href: "/" },
            { label: "Offers", href: "/" },
            { label: "Reward", href: "/" },
            { label: "Activities", href: "/" },
            { label: "Travel", href: "/travel" },
          ]}
        >
          {(item, index) => (
            <Link key={index} color="white" to={item.href}>
              {item.label}
            </Link>
          )}
        </For>
      </Flex>
    </Flex>
  );
};
