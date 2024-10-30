import { Outlet, Route, Routes } from "react-router-dom";
import { Layout } from "../layout/layout";
import { TravelPage } from "../pages/travel";
import { FlightPage } from "../pages/flight";
import { FlightProvider } from "../context/flight.context";

const FlightProviderWrapper = () => (
  <FlightProvider>
    <Outlet />
  </FlightProvider>
);

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<FlightProviderWrapper />}>
          <Route path="/travel" element={<TravelPage />} />
          <Route path="/flight" element={<FlightPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
