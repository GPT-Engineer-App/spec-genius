import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";

const CreateSeason = () => {
  const [seasonName, setSeasonName] = useState("");
  const [months, setMonths] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock saving data
    console.log("Season Created:", { seasonName, months });
    setSeasonName("");
    setMonths("");
  };

  return (
    <Container centerContent>
      <Box p={4} borderWidth={1} borderRadius="lg" width="100%" maxWidth="md">
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="season-name" isRequired>
              <FormLabel>Season Name</FormLabel>
              <Input
                type="text"
                value={seasonName}
                onChange={(e) => setSeasonName(e.target.value)}
              />
            </FormControl>
            <FormControl id="months" isRequired>
              <FormLabel>Months</FormLabel>
              <Input
                type="text"
                value={months}
                onChange={(e) => setMonths(e.target.value)}
              />
            </FormControl>
            <Button type="submit" colorScheme="blue" width="full">
              Create Season
            </Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
};

export default CreateSeason;