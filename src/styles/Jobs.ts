import { styled } from ".";
import { SectionContainer } from "./global";

export const JobContainer = styled(SectionContainer, {
  flexDirection: "row",

  "@media only screen and (max-width: 1025px)": {
    flexDirection: "column",
  },

  ".jobs": {
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
      "-webkit-text-stroke": "1px #f69d7b !important",
    },

    strong: {
      fontFamily: "Poppins, sans-serif",
      color: "white",
      fontSize: "3.5rem",
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
      fontSize: "3.5rem",
      textTransform: "uppercase",
      letterSpacing: "0.2rem",
      fontWeight: 700,
    },

    ".bot": {
      width: "100%",
      height: "3%",
      backgroundColor: "$orange400",
      margin: "3.5rem 0",
    },
  },
});
