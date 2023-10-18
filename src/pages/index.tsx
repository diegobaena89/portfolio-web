import { Box } from "@chakra-ui/react";
import { HomeContainer } from "../styles/Home";
import Image from "next/image";
import Photo from "../assets/me.jpg";
import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";
import { enUS } from "../languages/english/enUS";
import { elGR } from "../languages/greek/elGR";

export default function Home() {
  const { locale } = useContext(PortfolioContext)!;
  const traduction = locale === "en" ? enUS : elGR;
  return (
    <HomeContainer>
      <Box className="bio">
        <Box marginBottom={20}>
          <h1 className="title">software</h1>
          <h1>developer</h1>
          <h2>{traduction.home.subtitle}</h2>
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
