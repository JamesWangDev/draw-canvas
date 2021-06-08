import { Button, ButtonProps } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Flex, HStack } from "@chakra-ui/layout";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
const Navbar = () => {
  const color = useColorModeValue("black", "white");
  const bgColor = useColorModeValue("whiteAlpha.50", "blackAlpha.50");
  const borderBottomColor = useColorModeValue(
    "blackAlpha.50",
    "whiteAlpha.200"
  );
  const hoverBg = useColorModeValue("blackAlpha.300", "whiteAlpha.300");
  const buttonStyle: ButtonProps = {
    as: "a",
    borderRadius: "none",
    py: [6, 8],
    px: 2,
    minW: ["50px", "60px"],
    variant: "ghost",
    colorScheme: "blackAlpha",
    color,
    _hover: {
      bgColor: hoverBg,
    },
    _focus: { boxShadow: "none" },
  };
  const links = [
    {
      text: "Blog",
      url: "/blog",
    },
    {
      text: "Project",
      url: "/project",
    },
    {
      text: "About",
      url: "/about",
    },
  ];
  return (
    <Box
      bgColor="whiteAlpha.50"
      w="full"
      sx={{
        "@supports (backdrop-filter: blur(12px))": {
          backdropFilter: "blur(12px)",
          bgColor,
        },
        "@supports (-webkit-backdrop-filter: blur(12px))": {
          WebkitBackdropFilter: "blur(12px)",
          bgColor,
        },
      }}
      borderBottomColor={borderBottomColor}
      borderBottomWidth="2px"
      pos="fixed"
      top={0}
    >
      <Flex mx="auto" w="full" maxW="5xl">
        <Link href="/" passHref>
          <Button {...buttonStyle} fontWeight="bold" fontSize="lg">
            Wisesa.dev
          </Button>
        </Link>
        <HStack spacing={0}>
          {links.map((data, idx) => (
            <Link href={data.url} key={idx} passHref>
              <Button {...buttonStyle} fontSize="sm">
                {data.text}
              </Button>
            </Link>
          ))}
        </HStack>
        <ThemeSwitcher ml="auto" mr="2" alignSelf="center" />
      </Flex>
    </Box>
  );
};

export default Navbar;
