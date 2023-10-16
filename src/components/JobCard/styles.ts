import { Card } from "@chakra-ui/react";
import { styled } from "@stitches/react";

export const JobUnitCard = styled(Card, {
  padding: "10px",
  margin: "15px 0",
  cursor: "pointer",
  width: "95%",

  "&:hover": {
    transform: "scale(1.015)",
    transition: "all 0.2s ease-in-out",
  },

  h2: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "bold",
    color: "$orange600",
  },
  span: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "14px",
    color: "$gray600",
  },
  ".position": {
    fontFamily: "Poppins, sans-serif",
    fontWeight: 700,
    color: "$gray500",
  },
  ".description": {
    fontFamily: "Poppins, sans-serif",
    color: "$gray600",
  },
});
