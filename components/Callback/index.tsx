"use client";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import {
  Box,
  Button,
  FormControl,
  Input,
  Select,
  Text,
  VStack,
  Link,
  Spinner,
} from "@chakra-ui/react";
// Saas UI handles forms and layouts beautifully too
import { FormLayout } from "@saas-ui/react"; 
import AuthDialogContext from "app/context/AuthDialogContext";

interface CallbackFormData {
  name: string;
  number: string;
  course: string;
}

const Callback = ({ signUpOpen }: { signUpOpen?: any }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<CallbackFormData>({
    name: "",
    number: "",
    course: "",
  });
  
  const authDialog = useContext(AuthDialogContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://cortex-api-htc8.onrender.com/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result?.msg || "Failed to save callback");

      toast.success("Callback Saved Successfully");
      signUpOpen(false);
      authDialog?.setIsUserRegistered(true);

      setTimeout(() => {
        authDialog?.setIsUserRegistered(false);
      }, 1200);

    } catch (err: any) {
      toast.error(err?.message || "Failed to save");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box w="full" maxW="md" mx="auto">
      {/* Form Container */}
      <form onSubmit={handleSubmit}>
        <VStack spacing={5} align="stretch">
          
          <FormControl isRequired>
            <Input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              size="lg"
              borderRadius="md"
              focusBorderColor="primary.500" // Make sure 'primary' is defined in your theme
            />
          </FormControl>

          <FormControl isRequired>
            <Input
              name="number"
              type="tel"
              placeholder="Phone Number"
              value={formData.number}
              onChange={handleChange}
              size="lg"
              borderRadius="md"
              focusBorderColor="primary.500"
            />
          </FormControl>

          <FormControl isRequired>
            <Select
              name="course"
              placeholder="Select Technology"
              value={formData.course}
              onChange={handleChange}
              size="lg"
              borderRadius="md"
              focusBorderColor="primary.500"
            >
              <option value="Create your Own Website">Create your Own Website</option>
              <option value="Services">Services</option>
              <option value="Online Course">Online Course</option>
              <option value="Offline Course">Offline Course</option>
              <option value="Interview">Interview</option>
            </Select>
          </FormControl>

          <Button
            type="submit"
            colorScheme="blue" // Ya aapka theme primary color
            size="lg"
            w="full"
            isLoading={loading}
            loadingText="Submitting"
            spinnerPlacement="end"
            fontSize="md"
            fontWeight="bold"
          >
            Request Callback
          </Button>

          <Text fontSize="sm" color="gray.500" textAlign="center">
            By creating an account you agree with our{" "}
            <Link color="blue.500" href="#!">Privacy</Link> and{" "}
            <Link color="blue.500" href="#!">Policy</Link>
          </Text>
        </VStack>
      </form>
    </Box>
  );
};

export default Callback;