import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";

const CreatePicker = () => {
  const [pickerName, setPickerName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock saving data
    console.log("Picker Created:", { pickerName, email });
    setPickerName("");
    setEmail("");
  };

  return (
    <Container centerContent>
      <Box p={4} borderWidth={1} borderRadius="lg" width="100%" maxWidth="md">
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="picker-name" isRequired>
              <FormLabel>Picker Name</FormLabel>
              <Input
                type="text"
                value={pickerName}
                onChange={(e) => setPickerName(e.target.value)}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <Button type="submit" colorScheme="blue" width="full">
              Create Picker
            </Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
};

export default CreatePicker;