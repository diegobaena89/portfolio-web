import { globalCss, styled } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "Roboto, sans-serif",
  },

  body: {
    backgroundColor: "$background !important",
    color: "$gray700",
    "-webkit-font-smoothing": "antialiased",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  "body, input, button, textarea": {
    font: "400 16px Roboto, sans-serif",
  },

  "a:visited": {
    color: "$white",
  },
});

export const MainContainer = styled("div", {
  display: "flex",
  flexDirection: "row-reverse",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

export const SectionContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
  height: "80vh",
  width: "80vw",

  backgroundColor: "$white !important",
  borderRadius: "1rem 0 0 1rem",
  border: "1px solid $gray100",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
});
