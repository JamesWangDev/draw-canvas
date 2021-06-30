import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalProps,
  Stack,
  ButtonProps,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { FaExternalLinkAlt } from "react-icons/fa";

type MobileMenuProps = Omit<ModalProps, "children">;

const links = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Blog",
    url: "/blog",
  },
  {
    text: "Projects",
    url: "/projects",
  },
  {
    text: "Snippets",
    url: "/snippet",
  },
  {
    text: "Timeline",
    url: "https://timeline.wisesa.dev",
  },
  {
    text: "About",
    url: "/about",
  },
];
const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const hoverBg = useColorModeValue("blackAlpha.300", "whiteAlpha.300");
  const bgColor = useColorModeValue("white", "rgba(25, 25, 25, 1)");
  const color = useColorModeValue("black", "white");
  const buttonStyle: ButtonProps = {
    as: "a",
    borderRadius: "none",
    py: 8,
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

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="xs">
      <ModalOverlay
        sx={{
          "@supports (backdrop-filter: blur(4px))": {
            backdropFilter: "blur(4px)",
          },
          "@supports (-webkit-backdrop-filter: blur(4px))": {
            WebkitBackdropFilter: "blur(4px)",
          },
        }}
      />
      <ModalContent borderRadius="2px" px={0} py={2} bgColor={bgColor}>
        <ModalBody p="inherit">
          <Stack w="full" spacing={0}>
            {links.map((data, idx) => (
              <Link href={data.url} passHref key={idx}>
                <Button
                  {...buttonStyle}
                  w="full"
                  siez="sm"
                  onClick={onClose}
                  rel={data.text === "Timeline" && "noopener noreferrer"}
                  target={data.text === "Timeline" && "_blank"}
                  rightIcon={
                    data.text === "Timeline" ? (
                      <FaExternalLinkAlt size="10px" />
                    ) : undefined
                  }
                >
                  {data.text}
                </Button>
              </Link>
            ))}
          </Stack>
        </ModalBody>
        <ModalFooter justifyContent="space-between">
          <ThemeSwitcher ml="2" />
          <Button variant="ghost" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default MobileMenu;
