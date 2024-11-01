import React, { useState } from "react";
import { useFormik } from "formik";
import { Input, Button, Box, Flex } from "@chakra-ui/react";
import { Field } from "../ui/field";
import { NativeSelectField, NativeSelectRoot } from "../ui/native-select";

// Define the structure of a form field
interface FormField {
  id: string;
  label: string;
  type: "text" | "email" | "tel" | "date" | "select";
  placeholder?: string;
  options?: string[]; // For select fields
}

// Define the form fields as an array
const formFields: FormField[] = [
  { id: "firstName", label: "First Name", type: "text", placeholder: "Thomas" },
  { id: "lastName", label: "Last Name", type: "text", placeholder: "Smith" },
  {
    id: "email",
    label: "Email Address",
    type: "email",
    placeholder: "Thomassmith@google.com",
  },
  {
    id: "phoneNumber",
    label: "Phone Number",
    type: "tel",
    placeholder: "Enter your phone number",
  },
  {
    id: "passportCountry",
    label: "Passport Issue Country",
    type: "select",
    options: ["United Kingdom (UK)", "Canada (CA)", "United States (US)"],
  },
  { id: "dob", label: "Date of Birth", type: "date" },
  {
    id: "passportNumber",
    label: "Passport Number",
    type: "text",
    placeholder: "5467455",
  },
  { id: "expirationDate", label: "Expiration Date", type: "date" },
];

const FormWithDynamicFields: React.FC = () => {
  // State to control how many fields are rendered dynamically
  const [fieldCount, setFieldCount] = useState<number>(2);

  // Initialize formik with initial values and handle submission
  const formik = useFormik({
    initialValues: formFields.reduce((acc, field) => {
      acc[field.id] = "";
      return acc;
    }, {} as Record<string, string>), // Cast initialValues as a string record
    onSubmit: (values) => {
      console.log("Form values:", values);
    },
  });

  return (
    <Box p={4}>
      <form onSubmit={formik.handleSubmit}>
        {/* Dynamically render fields based on fieldCount */}
        {formFields.slice(0, fieldCount).map((field) => (
          <Flex key={field.id} justifyContent="space-between" mb={4}>
            <Field label={field.label} color={"gray.500"}>
              {field.type === "select" ? (
                <NativeSelectRoot>
                  <NativeSelectField
                    id={field.id}
                    name={field.id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values[field.id]}
                    items={field.options}
                    bg={"white"}
                  />
                </NativeSelectRoot>
              ) : (
                <Input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values[field.id]}
                />
              )}
            </Field>
          </Flex>
        ))}

        {/* Button to dynamically render more fields */}
        {fieldCount < formFields.length && (
          <Button
            mt={4}
            onClick={() => setFieldCount((prev) => prev + 1)}
            colorScheme="teal"
          >
            Add More Fields
          </Button>
        )}

        {/* Submit Button */}
        <Button mt={4} type="submit" colorScheme="blue">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default FormWithDynamicFields;
