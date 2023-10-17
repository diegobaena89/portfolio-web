import { styled } from ".";
import { SectionContainer } from "./global";

export const HomeContainer = styled(SectionContainer, {
  flexDirection: "row",

  "@media only screen and (max-width: 1100px)": {
    flexDirection: "column",
  },

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

    "@media only screen and (max-width: 1100px)": {
      ".sections": {
        display: "contents",
        alignItems: "initial",
      },
    },

    ".photo-box": {
      position: "relative",
      flex: 3,
      display: "flex",
      height: "50%",
    },

    ".photo-overlay": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },

    ".photo": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },

    ".name": {
      flex: 1.5,
      display: "flex",
      flexDirection: "column",
      alignIntem: "center",
      alignItems: "end",
      justifyContent: "end",
      marginRight: "0.2rem",

      h3: {
        fontFamily: "Poppins, sans-serif",
        textTransform: "uppercase",
        whiteSpace: "pre-line",
        fontSize: "2.5rem",
        lineHeight: "1",
        letterSpacing: "0.3rem",
        color: "transparent",
        fontWeight: 600,
        "-webkit-text-stroke": "1px #f69d7b !important",
      },
    },
  },
});
