import { Container } from "@chakra-ui/react";
import { Header } from "../components/custom/header";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Container px={0} py={5}>
      <Header />
      <Outlet />
    </Container>
  );
};
