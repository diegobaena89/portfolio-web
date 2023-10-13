import { AboutContainer } from "@/src/styles/About";
import { Box, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <AboutContainer>
      <Box className="bio">
        <h1>
          diego<strong>baena</strong>
        </h1>
        <Box className="photo"></Box>
        <Text fontSize={16} maxWidth={600}>
          Hello! I'm Diego, a technology enthusiast based in São Paulo, Brazil.
          My academic journey covers a wide range of fields. I have a background
          in Music, Literature, Analysis, and System Development. Additionally,
          I hold a master's degree in Modern Greek Language and Literature,
          allowing me to delve into language and culture roots.
          <br />
          <br />
          Today, I'm a passionate frontend developer. For me, software
          development is not just a profession; it's a way to merge creativity
          with technical skills. I collaborate with teams to craft engaging,
          functional interfaces connecting people to the digital world. My
          commitment to continuous learning and multidisciplinary approach
          provide a unique perspective when tackling software development
          challenges.
          <br />
          <br />
          I'm excited to share my experiences and projects with you. Let's
          explore the realms of technology and creativity together.
          <br />
        </Text>
      </Box>
      <Box className="projects">
        <h2>projects</h2>
      </Box>
    </AboutContainer>
  );
}
