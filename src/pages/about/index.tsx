import { AboutContainer } from "@/src/styles/About";
import { Box, Text, Tooltip } from "@chakra-ui/react";
import Link from "next/link";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  MediumLogo,
} from "@phosphor-icons/react";
import EducationCard from "@/src/components/educationCard";

import { useContext } from "react";
import { PortfolioContext } from "@/src/context/PortfolioContext";
import { enUS } from "@/src/languages/english/enUS";
import { elGR } from "@/src/languages/greek/elGR";
import objectToArray from "@/src/utils/objectToArray";

export default function About() {
  const { locale } = useContext(PortfolioContext)!;
  const traduction = locale === "en" ? enUS : elGR;
  const educationData = traduction.about.education;

  const education = objectToArray(educationData);

  return (
    <AboutContainer>
      <Box className="bio">
        <h1>
          diego<strong>baena</strong>
        </h1>
        <Box margin="20px 0">
          <Text fontSize={14} maxWidth={650} paddingBottom={4}>
            {traduction.about.bio.I}
          </Text>
          <Text fontSize={14} maxWidth={650} paddingBottom={4}>
            {traduction.about.bio.II}
          </Text>

          <Text fontSize={14} maxWidth={650} paddingBottom={4}>
            {traduction.about.bio.III}
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
        <Box className="photo"></Box>
      </Box>
      <Box className="education">
        <h2>{traduction.about.education.title}</h2>
        <Box>
          {education.education.map((item) => (
            <>
              <EducationCard
                key={item.id}
                institution={item.institution}
                date={item.date}
                course={item.course}
              />
            </>
          ))}
        </Box>
      </Box>
    </AboutContainer>
  );
}
