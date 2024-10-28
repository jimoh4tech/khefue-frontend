import { Flex, For, Image, Input } from "@chakra-ui/react";
import { InputGroup } from "../ui/input-group";
import { LuSearch } from "react-icons/lu";
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
        px={10}
        py={5}
        borderTopRadius="2xl"
        bg="white"
      >
        <Image src="/images/logo.svg" p="1" alt="Khefue Logo" />
        <Flex alignItems="center" gap={4}>
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
      <Flex bg="#370B6F" gapX={8} px="10" py={3} color="white">
        <For
          each={[
            { label: "Home", href: "/" },
            { label: "Offers", href: "/" },
            { label: "Reward", href: "/" },
            { label: "Activities", href: "/" },
            { label: "Travel", href: "/" },
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
