import { styled } from ".";
import { SectionContainer } from "./global";

export const AboutContainer = styled(SectionContainer, {
  flexDirection: "row",

  ".bio": {
    flex: 1,
    display: "flex",
    flexDirection: "column",

    h1: {
      fontFamily: "Poppins, sans-serif",
      color: "transparent",
      fontSize: "3.5rem",
      textTransform: "uppercase",
      letterSpacing: "0.2rem",
      fontWeight: 700,
      display: "inline-block",
      "-webkit-text-stroke": "1px #d0d48a !important",
    },

    strong: {
      fontFamily: "Poppins, sans-serif",
      color: "white",
      fontSize: "3.5rem",
      textTransform: "uppercase",
      letterSpacing: "0.2rem",
      fontWeight: 700,
      display: "inline-block",
      backgroundColor: "$lemon500",
      padding: "0 1rem 0 0",
    },

    p: {
      fontFamily: "Poppins, sans-serif",
    },

    ".photo": {
      width: "95%",
      height: "80%",
      border: "1px solid $lemon500",
      margin: "1rem 0",
    },
  },

  ".education": {
    flex: 1,

    h2: {
      fontFamily: "Poppins, sans-serif",
      color: "$lemon500",
      fontSize: "3.5rem",
      textTransform: "uppercase",
      letterSpacing: "0.2rem",
      fontWeight: 700,
    },
  },
});
