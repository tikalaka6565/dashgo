import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (<Box mr="4" textAlign="right">
        <Text>Clodoaldo</Text>
        <Text color="gray.300" fontSize="small">Clodoaldo@gmail.com</Text>
      </Box>)}

      <Avatar size="md" name="Diego Fernandes" />

    </Flex>
  )
}