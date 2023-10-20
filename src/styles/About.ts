import { Button } from "@chakra-ui/react";
import { styled } from ".";
import { SectionContainer } from "./global";

export const AboutContainer = styled(SectionContainer, {
  flexDirection: "row",

  "@media only screen and (max-width: 1200px)": {
    flexDirection: "column",
  },

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
      width: "90%",
      height: "3%",
      backgroundColor: "$lemon500",
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

export const CustomButtom = styled(Button, {
  backgroundColor: "$lemon500 !important",
  margin: "1rem 0 2rem !important",
  color: "white !important",
  transition: "all 0.3s ease-in-out !important",

  "&:hover": {
    backgroundColor: "$lemon300 !important",
  },
});
