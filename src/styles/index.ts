import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      background: "#f7f7f2",
      white: "#ffffff",

      gray1000: "#0e0e10",
      gray900: "#121214",
      gray800: "#202024",
      gray700: "#29292e",
      gray300: "#c4c4cc",
      gray100: "#e1e1e6",

      orange900: "#903715",
      orange800: "#c04a1c",
      orange700: "#f05d23",
      orange600: "#f16d38",
      orange400: "#f69d7b",

      lemon900: "#626c36",
      lemon700: "#9dac57",
      lemon600: "#c5d86d",
      lemon500: "#d0d48a",
      lemon300: "#e2ebb6",

      green500: "#b6b89c",
      green300: "#e4e6c3",
    },
  },
});
