import React, { useState } from "react";
import { Button, Flex, Input } from "@chakra-ui/react";
import { StepperInputProps } from "../../interface/stepper.interface";

export const CustomStepperInput: React.FC<StepperInputProps> = ({
  min = 0,
  max = 100,
  step = 1,
  value = 0,
  name,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState<number>(value);

  const handleIncrement = () => {
    if (inputValue < max) {
      const newValue = inputValue + step;
      setInputValue(newValue);
      onChange?.(newValue);
    }
  };

  const handleDecrement = () => {
    if (inputValue > min) {
      const newValue = inputValue - step;
      setInputValue(newValue);
      onChange?.(newValue);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      setInputValue(newValue);
      onChange?.(newValue);
    }
  };

  return (
    <Flex align="center" maxW="200px">
      <Button onClick={handleDecrement} disabled={inputValue <= min}>
        -
      </Button>
      <Input
        value={inputValue}
        onChange={handleChange}
        textAlign="center"
        type="number"
        mx={2}
        width="60px"
        min={min}
        max={max}
        name={name}
      />
      <Button
        onClick={handleIncrement}
        disabled={inputValue >= max}
        colorPalette={"white"}
      >
        +
      </Button>
    </Flex>
  );
};
