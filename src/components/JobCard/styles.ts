import { Card } from "@chakra-ui/react";
import { styled } from "@stitches/react";

export const JobUnitCard = styled(Card, {
  padding: "10px",
  margin: "15px 0",

  h2: {
    fontFamily: "Poppins, sans-serif",
  },
  span: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "14px",
  },
  ".position": {
    fontFamily: "Poppins, sans-serif",
  },
  ".description": {
    fontFamily: "Poppins, sans-serif",
  },
});
