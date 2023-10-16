import { AboutContainer } from "@/src/styles/About";
import { Box, Text, Tooltip } from "@chakra-ui/react";
import Link from "next/link";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  MediumLogo,
} from "@phosphor-icons/react";

export default function About() {
  const presentation = "I'm Diego, a technology enthusiast based in São Paulo";
  const degree =
    "I hold a master's degree in Modern Greek Language and Literature.";
  const skills = "it's a way to merge creativity with technical skills";

  return (
    <AboutContainer>
      <Box className="bio">
        <h1>
          diego<strong>baena</strong>
        </h1>
        <Box marginTop={"-40px"}>
          <Box className="photo"></Box>
          <Text fontSize={14} maxWidth={650} paddingBottom={4}>
            Hello! {presentation} , Brazil. My academic journey covers a wide
            range of fields. I have a background in Music, Literature, Analysis,
            and System Development. Additionally, {degree}.
          </Text>
          <Text fontSize={14} maxWidth={650} paddingBottom={4}>
            Today, I am a passionate frontend developer. For me, software
            development is not just a profession; {skills}. I collaborate with
            teams to craft engaging, functional interfaces connecting people to
            the digital world. My commitment to continuous learning and
            multidisciplinary approach provide a unique perspective when
            tackling software development challenges.
          </Text>

          <Text fontSize={14} maxWidth={650} paddingBottom={4}>
            I thrive on the opportunity to marry my creative and technical
            skills, constantly pushing the boundaries of whats possible in the
            ever-evolving world of technology.
          </Text>

          <Box
            display="flex"
            alignItems={"center"}
            justifyContent={"space-around"}
            width="25%"
          >
            <Link href="https://github.com/diegobaena89">
              <Tooltip
                label="Github"
                aria-label="Github"
                color="#9dac57"
                bg={"transparent"}
                border={"none"}
                boxShadow={"none"}
              >
                <GithubLogo
                  size={27}
                  weight="light"
                  cursor={"pointer"}
                  color="#9dac57"
                />
              </Tooltip>
            </Link>
            <Link href="https://www.linkedin.com/in/diegobaena89/">
              <Tooltip
                label="Linkedin"
                aria-label="Linkedin"
                color="#9dac57"
                bg={"transparent"}
                border={"none"}
                boxShadow={"none"}
              >
                <LinkedinLogo
                  size={27}
                  weight="light"
                  cursor={"pointer"}
                  color="#9dac57"
                />
              </Tooltip>
            </Link>
            <Link href="https://instagram.com/baena.exe">
              <Tooltip
                label="Instagram"
                aria-label="Instagram"
                color="#9dac57"
                bg={"transparent"}
                border={"none"}
                boxShadow={"none"}
              >
                <InstagramLogo
                  size={27}
                  weight="light"
                  cursor={"pointer"}
                  color="#9dac57"
                />
              </Tooltip>
            </Link>
            <Link href="https://medium.com/@diego-baena">
              <Tooltip
                label="Medium"
                aria-label="Medium"
                color="#9dac57"
                bg={"transparent"}
                border={"none"}
                boxShadow={"none"}
              >
                <MediumLogo
                  size={27}
                  weight="light"
                  cursor={"pointer"}
                  color="#9dac57"
                />
              </Tooltip>
            </Link>
          </Box>
        </Box>
      </Box>
      <Box className="education">
        <h2>education</h2>
      </Box>
    </AboutContainer>
  );
}
