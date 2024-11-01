import "./App.css";
import { Container } from "@chakra-ui/react";
import { Router } from "./route/routes";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <Container px={0} borderTopRadius="2xl">
      <Toaster />

      <Router />
    </Container>
  );
}

export default App;
