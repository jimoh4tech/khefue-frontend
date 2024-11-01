import { Flex, Input, Separator, Text } from "@chakra-ui/react";
import { SearchableSelect } from "../custom/searchable-select";
import { FlightSearchRequest } from "../../interface/flight.interface";
import { Button } from "../ui/button";
import { IoSearch } from "react-icons/io5";
import {
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from "../ui/popover";
import { useFormik } from "formik";
import { searchFlight } from "../../services/flight.services";
import { useNavigate } from "react-router-dom";
import { useFlightItenary } from "../../hooks/flight.hooks";
import { AIRPORT_LIST_OPTION } from "../../utils/airport-list";
import { toaster } from "../ui/toaster";
import { CustomStepperInput } from "../custom/stepperInput";

export const CarRentalSeach = () => {
  const { setAirItenaryFlightInfo, setSearchObj, setSessionId, searchObj } =
    useFlightItenary();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      requiredCurrency: searchObj?.requiredCurrency || "NGN",
      journeyType: searchObj?.journeyType || "Return",
      departureDate: searchObj?.departureDate || "",
      airportOriginCode: searchObj?.airportOriginCode || null,
      returnDate: searchObj?.returnDate || "",
      airportDestinationCode: searchObj?.airportDestinationCode || null,
      class: searchObj?.class || "Economy",
      adults: searchObj?.adults || 1,
      childs: searchObj?.childs || 0,
      infants: searchObj?.infants || 0,
    },
    async onSubmit(values) {
      setAirItenaryFlightInfo(null);
      try {
        const searchObj: FlightSearchRequest = {
          requiredCurrency: "NGN",
          journeyType: values?.journeyType,
          class: values?.class,
          adults: Number(values?.adults || 1),
          OriginDestinationInfo: [
            {
              departureDate: values?.departureDate,
              airportOriginCode: values?.airportOriginCode || "",
              airportDestinationCode: values?.airportDestinationCode || "",
            },
          ],
        };
        if (values?.journeyType === "Return")
          searchObj.OriginDestinationInfo[0].returnDate = values?.returnDate;
        if (values?.childs && values.childs !== 0)
          searchObj.childs = Number(values.childs);
        if (values?.infants && values.infants !== 0)
          searchObj.infants = Number(values.infants);
        console.log({ searchObj });
        setSearchObj(values);
        const res = await searchFlight(searchObj);
        console.log({
          values,
          res,
          keep: res?.result?.AirSearchResponse?.AirSearchResult
            ?.FareItineraries,
        });
        setAirItenaryFlightInfo(
          res?.result?.AirSearchResponse?.AirSearchResult?.FareItineraries
        );
        setSessionId(res?.result?.AirSearchResponse?.session_id);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: Error | any) {
        console.log(error);
        if (
          error?.response?.data?.message ==
          "Flights not found for the given search condition."
        ) {
          toaster.create({
            title: `Flights not found for the given search condition.`,
            type: "info",
          });
        } else {
          toaster.create({
            title: `Invalid search parameter. Kindly retry!`,
            type: "error",
          });
          setAirItenaryFlightInfo([]);
        }
      }
      if (window.location.pathname.includes("/travel")) {
        navigate("/flight");
      }
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAirportOriginCodeChange = (selectedOption: any) => {
    formik.setFieldValue("airportOriginCode", selectedOption?.value); // Ensure formik is setting the correct value
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAirportDestinationCodeChange = (selectedOption: any) => {
    formik.setFieldValue("airportDestinationCode", selectedOption?.value); // Ensure formik is setting the correct value
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Flex direction={"column"}>
        <Flex
          p={4}
          bg={"white"}
          borderRadius={"2xl"}
          color={"black"}
          gap={3}
          alignItems={"center"}
          direction={"column"}
          lg={{ flexDir: "row" }}
        >
          <Separator hideFrom={"lg"} />
          <Flex
            gap={3}
            alignItems={"start"}
            direction={"column"}
            sm={{ flexDirection: "row" }}
            w={"full"}
          >
            <Flex direction="column" gap={2}>
              <Text fontWeight={"semibold"} fontSize={"sm"}>
                Pick up location
              </Text>
              <SearchableSelect
                options={AIRPORT_LIST_OPTION}
                onChange={handleAirportOriginCodeChange}
                name="airportOriginCode"
                value={formik.values.airportOriginCode}
              />
            </Flex>
            <Separator orientation="vertical" height="16" hideBelow={"sm"} />
            <Separator hideFrom={"sm"} />
            <Flex direction="column" gap={2}>
              <Text fontWeight={"semibold"} fontSize={"sm"}>
                Drop off location
              </Text>
              <SearchableSelect
                options={AIRPORT_LIST_OPTION}
                onChange={handleAirportDestinationCodeChange}
                name="airportDestinationCode"
                value={formik.values.airportDestinationCode}
              />
            </Flex>
            <Separator orientation="vertical" height="16" hideBelow={"lg"} />
          </Flex>
          <Separator hideFrom={"lg"} />
          <Flex
            gap={3}
            direction={"column"}
            sm={{ flexDirection: "row" }}
            w={"full"}
            justifyContent={"space-between"}
          >
            <Flex direction="column" gap={2}>
              <Text fontWeight={"semibold"} fontSize={"sm"}>
                Drop up
              </Text>
              <Input
                type="date"
                min={new Date().toISOString().split("T")[0]}
                size="xs"
                name="departureDate"
                value={formik.values.departureDate}
                onChange={formik.handleChange}
              />
            </Flex>
            <Separator orientation="vertical" height="16" hideBelow={"sm"} />
            <Separator hideFrom={"sm"} />
            <Flex
              direction="column"
              gap={2}
              display={`${
                formik.values.journeyType == "OneWay" ? "none" : "flex"
              }`}
            >
              <Text fontWeight={"semibold"} fontSize={"sm"}>
                Pick off
              </Text>
              <Input
                type="date"
                min={
                  new Date(formik.values.departureDate || new Date().getTime())
                    .toISOString()
                    .split("T")[0]
                }
                size="xs"
                name="returnDate"
                value={formik.values.returnDate}
                onChange={formik.handleChange}
              />
            </Flex>
            <Separator
              orientation="vertical"
              height="16"
              display={`${
                formik.values.journeyType == "OneWay" ? "none" : "flex"
              }`}
              hideBelow={"sm"}
            />
            <Separator
              hideFrom={"sm"}
              display={`${
                formik.values.journeyType == "OneWay" ? "none" : "flex"
              }`}
            />
            <Flex direction="column" gap={2}>
              <Text fontWeight={"semibold"} fontSize={"sm"}>
                Passengers
              </Text>
              <PopoverRoot>
                <PopoverTrigger asChild>
                  <Button size="xs" variant="outline">
                    {Number(formik.values.adults) +
                      Number(formik.values.childs) +
                      Number(formik.values.infants)}{" "}
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverBody>
                    <Flex direction={"column"} gap={3}>
                      <Flex
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Text fontSize={"sm"}>Adults</Text>
                        <CustomStepperInput
                          name="adults"
                          value={formik.values.adults}
                          onChange={(val) =>
                            formik.setFieldValue("adults", val)
                          }
                        />
                      </Flex>
                      <Flex
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Text fontSize={"sm"}>Children</Text>

                        <CustomStepperInput
                          name="childs"
                          value={formik.values.childs}
                          onChange={(val) =>
                            formik.setFieldValue("childs", val)
                          }
                        />
                      </Flex>
                      <Flex
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Text fontSize={"sm"}>Infacts</Text>

                        <CustomStepperInput
                          name="infants"
                          value={formik.values.infants}
                          onChange={(val) =>
                            formik.setFieldValue("infants", val)
                          }
                        />
                      </Flex>
                    </Flex>
                  </PopoverBody>
                </PopoverContent>
              </PopoverRoot>
            </Flex>
          </Flex>
          <Separator hideFrom={"lg"} />
          <Button
            bg={"#370B6F"}
            variant="solid"
            p={5}
            type="submit"
            loading={formik.isSubmitting}
            w={"60"}
            lg={{ w: "28" }}
          >
            <IoSearch color="white" /> Search
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};
