import { styled } from ".";
import { SectionContainer } from "./global";

export const AboutContainer = styled(SectionContainer, {
  flexDirection: "row",

  ".bio": {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    h1: {
      fontFamily: "Poppins, sans-serif",
      color: "$lemon700",
      fontSize: "2.2rem",
      textTransform: "uppercase",
      letterSpacing: "0.2rem",
      fontWeight: 100,
    },

    ".photo": {
      width: "85%",
      height: "50%",
      backgroundColor: "$lemon300",
      marginBlock: "1rem",
    },
  },

  ".projects": {
    flex: 1,

    h2: {
      fontFamily: "Poppins, sans-serif",
      color: "$lemon700",
      fontSize: "2.2rem",
      textTransform: "uppercase",
      letterSpacing: "0.2rem",
      fontWeight: 300,
    },
  },
});
