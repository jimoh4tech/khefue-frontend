import { Flex } from "@chakra-ui/react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navige = useNavigate();
  return (
    <Flex justifyContent={"center"} alignItems={"center"} h={"300px"}>
      <Button onClick={() => navige("/travel")}>Goto Travels</Button>
    </Flex>
  );
};
