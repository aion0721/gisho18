import { Outlet, Link } from "react-router-dom";
import { Flex, Box, IconButton, Spacer, HStack } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { LuSun, LuMoon } from "react-icons/lu";

const Layout = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={colorMode === "light" ? "gray.50" : "gray.800"}>
      <Flex
        as="nav"
        align="center"
        p={4}
        boxShadow="sm"
        bg={colorMode === "light" ? "white" : "gray.900"}
      >
        <HStack gap={4}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </HStack>
        <Spacer />
        <IconButton onClick={toggleColorMode} variant="outline" size="sm">
          {colorMode === "light" ? <LuSun /> : <LuMoon />}
        </IconButton>
      </Flex>
      <Box p={4}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
