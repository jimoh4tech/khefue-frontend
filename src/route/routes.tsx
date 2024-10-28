import { Route, Routes } from "react-router-dom";
import { Layout } from "../layout/layout";
import { TravelPage } from "../pages/travel";
import { FlightPage } from "../pages/flight";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="travel" element={<TravelPage />} />
        <Route path="flight" element={<FlightPage />} />
      </Route>
    </Routes>
  );
};
