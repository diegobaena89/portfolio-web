import { styled } from ".";
import { SectionContainer } from "./global";

export const HomeContainer = styled(SectionContainer, {
  flexDirection: "row",

  ".bio": {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",

    ".title": {
      marginBottom: "-40px",
    },

    h1: {
      fontFamily: "Poppins, sans-serif",
      fontSize: "5rem",
      color: "$orange600",
      fontWeight: 300,
      textTransform: "uppercase",
      whiteSpace: "pre-line",
      lineHeight: "1.4",
      letterSpacing: "0.2rem",
    },

    h2: {
      fontFamily: "Poppins, sans-serif",
      fontSize: "1.1rem",
      maxWidth: "300px",
      color: "$gray600",
      fontWeight: 300,
      textTransform: "uppercase",
    },
  },

  ".sections": {
    flex: 1,
    display: "flex",
    alignItems: "end",

    ".photo-box": {
      backgroundColor: "$orange400",
      flex: 3,
      display: "flex",
      height: "50%",
    },

    ".name": {
      flex: 1.5,
      display: "flex",
      flexDirection: "column",
      alignIntem: "center",
      alignItems: "end",
      justifyContent: "end",
      marginRight: "1.2rem",

      h3: {
        textTransform: "uppercase",
        whiteSpace: "pre-line",
        fontSize: "2.5rem",
        lineHeight: "1",
        letterSpacing: "0.2rem",
        color: "$orange600",
      },
    },
  },
});
