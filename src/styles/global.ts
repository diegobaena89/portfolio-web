import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "Roboto, sans-serif",
  },

  body: {
    backgroundColor: "$background",
    color: "$gray900",
    "-webkit-font-smoothing": "antialiased",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  "body, input, button, textarea": {
    font: "400 16px Roboto, sans-serif",
  },
});
