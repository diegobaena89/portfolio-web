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
    color: "$textPrimary",
    "-webkit-font-smoothing": "antialiased",
  },

  "body, input, button, textarea": {
    font: "400 16px Roboto, sans-serif",
  },
});
