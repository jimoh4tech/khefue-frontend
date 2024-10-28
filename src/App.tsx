import "./App.css";
import { Container } from "@chakra-ui/react";
import { Router } from "./route/routes";

function App() {
  return (
    <Container px={0} borderTopRadius="2xl">
      <Router />
    </Container>
  );
}

export default App;
