import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Orange Picker Task Management</Text>
        <Button as={Link} to="/create-season" colorScheme="teal" size="lg">
          Create Season
        </Button>
        <Button as={Link} to="/create-picker" colorScheme="teal" size="lg">
          Create Picker
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;