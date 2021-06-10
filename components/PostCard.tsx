import { PostType } from "@/types/post";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { AspectRatio, Box, Heading, Text } from "@chakra-ui/layout";
import Image from "next/image";
import { RouteLink } from "./RouteLink";

const PostCard = ({
  title,
  slug,
  description,
  image,
  publishedAt,
}: PostType) => {
  console.log(image);
  const borderColor = useColorModeValue("blackAlpha.100", "whiteAlpha.200");
  const date = new Date(publishedAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const bgHoverColor = useColorModeValue("blackAlpha.50", "whiteAlpha.200");
  return (
    <RouteLink href={`/blog/${slug}`} textDecor="none!important">
      <Box
        borderRadius="5px"
        borderColor={borderColor}
        borderWidth="1px"
        role="group"
        _hover={{ bgColor: bgHoverColor, transition: "0.2s ease all" }}
      >
        <AspectRatio ratio={1.92 / 1}>
          <Box
            borderTopRadius="5px"
            borderBottomColor={borderColor}
            borderBottomWidth="1px"
            _groupHover={{ opacity: 0.9 }}
          >
            <Image
              alt={title}
              width="512"
              height="267"
              quality="100"
              src={image ? image : "/og-post-default.jpg"}
            />
          </Box>
        </AspectRatio>
        <Box p="2">
          <Heading as="h4" fontSize="xl">
            {title}
          </Heading>
          <Text>{description}</Text>
          <Text mt="2">{date}</Text>
        </Box>
      </Box>
    </RouteLink>
  );
};

export default PostCard;
