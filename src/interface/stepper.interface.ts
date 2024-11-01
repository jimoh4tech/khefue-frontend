export interface StepperInputProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  name: string;
  onChange?: (value: number) => void;
}
