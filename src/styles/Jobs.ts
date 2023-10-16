import { styled } from ".";
import { SectionContainer } from "./global";

export const JobContainer = styled(SectionContainer, {
  flexDirection: "row",

  ".jobs": {
    flex: 1,
    display: "flex",
    flexDirection: "column",

    h1: {
      fontFamily: "Poppins, sans-serif",
      color: "transparent",
      fontSize: "4.5rem",
      textTransform: "uppercase",
      letterSpacing: "0.2rem",
      fontWeight: 700,
      display: "inline-block",
      "-webkit-text-stroke": "1px #f69d7b !important",
    },

    strong: {
      fontFamily: "Poppins, sans-serif",
      color: "white",
      fontSize: "4.5rem",
      textTransform: "uppercase",
      letterSpacing: "0.2rem",
      fontWeight: 700,
      display: "inline-block",
      backgroundColor: "#f69d7b",
      padding: "0 1rem 0 0",
    },
  },

  ".projects": {
    flex: 1,
    display: "flex",
    flexDirection: "column",

    h2: {
      fontFamily: "Poppins, sans-serif",
      color: "#f69d7b",
      fontSize: "4.5rem",
      textTransform: "uppercase",
      letterSpacing: "0.2rem",
      fontWeight: 700,
    },
  },
});
