import { Flex, Input, Separator, Text } from "@chakra-ui/react";
import { SearchableSelect } from "../custom/searchable-select";
import {
  AirportOption,
  FlightSearchProps,
  FlightSearchRequest,
} from "../../interface/flight.interface";
import { Button } from "../ui/button";
import { IoSearch } from "react-icons/io5";
import {
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from "../ui/popover";
import { StepperInput } from "../ui/stepper-input";
import { NativeSelectField, NativeSelectRoot } from "../ui/native-select";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { getAirportList, searchFlight } from "../../services/flight.services";
import { useNavigate } from "react-router-dom";

export const FlightSearch = ({
  init,
  setAirItenaryFlightInfo,
  setSessionID,
}: {
  init: FlightSearchProps;
  setSessionID?: (e: string) => void;
  setAirItenaryFlightInfo?: (e: []) => void;
}) => {
  const [airportList, setAirportList] = useState<AirportOption[]>([]);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: init,
    async onSubmit(values) {
      console.log();
      if (window.location.pathname.includes("/travel")) {
        navigate(
          `/flight?requiredCurrency=${values.requiredCurrency}&journeyType=${values.journeyType}&departureDate=${values.departureDate}&returnDate=${values.returnDate}&airportOriginCode=${values.airportOriginCode}&airportDestinationCode=${values.airportDestinationCode}&class=${values.class}&adults=${values.adults}&infants=${values.infants}&childs=${values.childs}`
        );
      } else {
        try {
          const searchObj: FlightSearchRequest = {
            requiredCurrency: "NGN",
            journeyType: values?.journeyType,
            class: values?.class,
            adults: Number(values?.adults || 1),
            OriginDestinationInfo: [
              {
                departureDate: values?.departureDate,
                returnDate: values?.returnDate, // In this is journeyType is Rwturn
                airportOriginCode: values?.airportOriginCode || "",
                airportDestinationCode: values?.airportDestinationCode || "",
              },
            ],
          };
          if (values?.childs) searchObj.childs = Number(values.childs);
          if (values?.infants) searchObj.infants = Number(values.infants);
          console.log({ searchObj });
          const res = await searchFlight(searchObj);
          console.log({ values, res });
          if (setSessionID)
            setSessionID(res?.result?.AirSearchResponse?.session_id || "");
          if (setAirItenaryFlightInfo)
            setAirItenaryFlightInfo(
              res?.result?.AirSearchResponse?.FareItineraries || []
            );
        } catch (error) {
          console.log(error);
        }
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
  const fetchAirportList = async () => {
    try {
      const res = await getAirportList();
      console.log(res?.result?.docs);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const arr: AirportOption[] = res?.result?.docs?.map((e: any) => {
        return {
          value: e.AirportCode,
          label: `${e.AirportCode} - ${e.AirportName} - ${e.City}, ${e.Country}`,
        };
      });
      console.log(arr);
      setAirportList(arr);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAirportList();
  }, []);

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
        >
          <Flex direction="column" gap={2}>
            <Text fontWeight={"semibold"} fontSize={"sm"}>
              Flying From
            </Text>
            <SearchableSelect
              options={airportList}
              onChange={handleAirportOriginCodeChange}
              name="airportOriginCode"
              value={formik.values.airportOriginCode}
            />
          </Flex>
          <Separator orientation="vertical" height="16" />
          <Flex direction="column" gap={2}>
            <Text fontWeight={"semibold"} fontSize={"sm"}>
              Flying To
            </Text>
            <SearchableSelect
              options={airportList}
              onChange={handleAirportDestinationCodeChange}
              name="airportDestinationCode"
              value={formik.values.airportDestinationCode}
            />
          </Flex>
          <Separator orientation="vertical" height="16" />
          <Flex direction="column" gap={2}>
            <Text fontWeight={"semibold"} fontSize={"sm"}>
              Depart
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
          <Separator orientation="vertical" height="16" />
          <Flex
            direction="column"
            gap={2}
            display={`${
              formik.values.journeyType == "OneWay" ? "none" : "flex"
            }`}
          >
            <Text fontWeight={"semibold"} fontSize={"sm"}>
              Return
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
          />
          <Flex direction="column" gap={2}>
            <Text fontWeight={"semibold"} fontSize={"sm"}>
              Travellers
            </Text>
            <PopoverRoot>
              <PopoverTrigger asChild>
                <Button size="xs" variant="outline">
                  {Number(formik.values.adults) +
                    Number(formik.values.childs) +
                    Number(formik.values.infants)}{" "}
                  Travellers
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
                      <StepperInput
                        size={"xs"}
                        min={1}
                        name="adults"
                        // value={formik.values.adults}
                        // onChange={(val) => formik.setFieldValue("adults", val)}
                      />
                    </Flex>
                    <Flex
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Text fontSize={"sm"}>Children</Text>
                      <StepperInput
                        size={"xs"}
                        min={1}
                        name="childs"
                        // value={formik.values.childs}
                        // onChange={formik.handleChange}
                      />
                    </Flex>
                    <Flex
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Text fontSize={"sm"}>Infacts</Text>
                      <StepperInput
                        size={"xs"}
                        min={1}
                        name="infants"
                        // value={formik.values.infants}
                        // onChange={formik.handleChange}
                      />
                    </Flex>
                  </Flex>
                </PopoverBody>
              </PopoverContent>
            </PopoverRoot>
          </Flex>
          <Button
            bg={"#370B6F"}
            variant="solid"
            p={5}
            type="submit"
            loading={formik.isSubmitting}
          >
            <IoSearch color="white" /> Search
          </Button>
        </Flex>
        <Flex gap={2}>
          <NativeSelectRoot size="sm" width="140px">
            <NativeSelectField
              name="journeyType"
              value={formik.values.journeyType}
              onChange={formik.handleChange}
              color={"gray.400"}
              border={"none"}
            >
              <option value="Return">Return</option>
              <option value="OneWay">OneWay</option>
            </NativeSelectField>
          </NativeSelectRoot>
          <NativeSelectRoot size="sm" width="140px">
            <NativeSelectField
              name="class"
              value={formik.values.class}
              onChange={formik.handleChange}
              color={"gray.400"}
              border={"none"}
            >
              <option value="Economy">Economy</option>
              <option value="First">First</option>
            </NativeSelectField>
          </NativeSelectRoot>
        </Flex>
      </Flex>
    </form>
  );
};
