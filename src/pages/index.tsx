import { Box } from "@chakra-ui/react";
import { HomeContainer } from "../styles/Home";
import Image from "next/image";
import Photo from "../assets/me.jpg";

export default function Home() {
  return (
    <HomeContainer>
      <Box className="bio">
        <Box marginBottom={20}>
          <h1 className="title">software</h1>
          <h1>developer</h1>
          <h2>
            Passionated developer with strong hard and soft skills, transforming
            ideas into digital experiences.
          </h2>
        </Box>
      </Box>
      <Box className="sections">
        <Box className="name">
          <h3>diego</h3>
          <h3>baena</h3>
        </Box>
        <Box className="photo-box">
          <div className="photo-overlay">
            <Image src={Photo} alt="Me" className="photo" />
          </div>
        </Box>
      </Box>
    </HomeContainer>
  );
}
