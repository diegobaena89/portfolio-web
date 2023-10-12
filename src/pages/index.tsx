import Navbar from "../components/navbar";
import { HomeContainer, MainContainer } from "../styles/Home";

export default function Home() {
  return (
    <MainContainer>
      <HomeContainer>Home</HomeContainer>
      <Navbar />
    </MainContainer>
  );
}
