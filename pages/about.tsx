import Main from "@/components/Main";
import {
  Text,
  Flex,
  Box,
  Link,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import Head from "@/components/Head";
import Image from "next/image";
import socials from "@/data/socials";
import Doodle1 from "@/components/doodle/Doodle1";
import Knowledgebase from "@/components/about/Knowledgebase";
const about = () => {
  return (
    <Main maxW="3xl" mb="6">
      <Head title="About" />
      <style global jsx>
        {`
          .me-image {
            border-radius: 100%;
            filter: grayscale(20%);
          }
        `}
      </style>
      <Flex justifyContent="center" mt={[4, 6]} pos="relative">
        <Image
          src={require("public/me-2.jpg")}
          placeholder="blur"
          width="280"
          height="280"
          alt="me"
          priority
          className="me-image noselect"
        />
        <Box
          width="300px"
          height="200px"
          position="absolute"
          zIndex={2}
          bottom={["-80px", "-90px"]}
          left={0}
          right={0}
          mx="auto"
        >
          <Doodle1 />
        </Box>
      </Flex>
      <Box zIndex="5">
        <Text pt="4">
          Hello, my name is <b>Anvaqta Tangguh Wisesa</b>, you can call me{" "}
          <b>Wisesa</b> or <b>Esa</b> for short. Yes, i changed my nickname
          haha, if you're my school/college friend you maybe know me as{" "}
          <b>Vaq</b> or <b>Anvaq</b> but that's ok, you can call me anything you
          want as long as it's my name and not someone else <i>wkw</i>.
        </Text>
        <Text mt="2">
          I grew up in a small village located in{" "}
          <Link
            textDecoration="underline"
            isExternal
            href="https://www.google.com/search?q=grobogan+jawa+tengah"
          >
            Grobogan, Jawa Tengah
          </Link>
          . I'm currently pursuing my Bachelor's degree in Informatics (Computer
          science) at{" "}
          <Link
            textDecoration="underline"
            isExternal
            href="https://telkomuniversity.ac.id/"
          >
            Telkom University
          </Link>{" "}
          also working as a Software engineer at a start-up called{" "}
          <Link
            textDecoration="underline"
            href="https://ketringan.com"
            isExternal
          >
            Ketringan Indonesia
          </Link>
          .
        </Text>
        <Text mt="2">
          I love exploring tech related stuff. When i was in college i join many
          community and laboratory to expand my knowledge, I'm member of{" "}
          <Link
            textDecoration="underline"
            href="https://www.instagram.com/cciunitel/?hl=en"
            isExternal
          >
            CCI-Unitel
          </Link>
          , part of{" "}
          <Link
            textDecoration="underline"
            href="https://www.instagram.com/pramukatelu/?hl=en"
            isExternal
          >
            Pramuka Tel-U
          </Link>
          , and i'm the (ex) lab.assistant of{" "}
          <Link
            textDecoration="underline"
            href="http://ailabtelkom.github.io/"
            isExternal
          >
            Artificial Intelligence TelU
          </Link>
          . Also, I joined many competition such as Competitive programming,
          UI/UX Design, and{" "}
          <Link
            isExternal
            textDecoration="underline"
            href="https://youngster.id/news/ketringan-com-juara-di-brixgoogle-cloud-hackathon/"
          >
            Hackathon
          </Link>
          .
        </Text>
        <Text mt="2">
          Outside of software developing thingy, I love playing and{" "}
          <Link
            isExternal
            textDecoration="underline"
            href="https://open.spotify.com/user/21xnhzh4qf74t5t4lp2fammai"
          >
            listening music
          </Link>
          . I can (barely) play some music instruments like guitar, ukulele, and
          drum. Also, I love cycling (almost) every weekend.
        </Text>

        <Knowledgebase />
        <Box pt="4">
          <Text>
            I’m always excited to connect with everyone so please don’t hesitate
            to{" "}
            <Link textDecoration="underline" href="mailto:hi@wisesa.dev">
              get in touch
            </Link>{" "}
            with me by following my social media bellow:
          </Text>
          <UnorderedList mt="2">
            {socials.map((data, idx) => (
              <ListItem key={idx}>
                {data.name} -{" "}
                <Link textDecoration="underline" href={data.url} isExternal>
                  {data.url}
                </Link>
              </ListItem>
            ))}
          </UnorderedList>
          <Text mt="2">
            Also, you can{" "}
            <Link textDecoration="underline" href="/resume" isExternal>
              read my resume here
            </Link>
            . Anyway, thanks for visiting my profile :)
          </Text>
        </Box>
      </Box>
    </Main>
  );
};

export default about;
