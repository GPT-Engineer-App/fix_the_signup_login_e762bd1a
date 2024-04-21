import { Box, FormControl, FormLabel, Input, Button, VStack, Text, Divider } from "@chakra-ui/react"; 
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <Box>
      <VStack spacing={6} my={8}>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button size="lg" colorScheme="blue" w="full" mt={4} boxShadow="md">
          Log In with Email
        </Button>
        <Text>Or</Text>
        <Button size="lg" colorScheme="red" w="full" mt={4} boxShadow="md">
          Log In with Google  
        </Button>
        <Divider />
        <Text>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </Text>
      </VStack>
    </Box>
  );
};

export default LoginPage;