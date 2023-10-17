import { Card } from "@chakra-ui/react";
import { styled } from "@stitches/react";

export const EducationUnitCard = styled("div", {
  //   padding: "20px",
  margin: "50px 0",
  cursor: "pointer",
  width: "95%",

  "&:hover": {
    transform: "scale(1.015)",
    transition: "all 0.2s ease-in-out",
  },

  h5: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "bold",
    color: "$gray500",
  },
  h4: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "14px",
    color: "$gray600",
  },
  ".institution": {
    fontFamily: "Poppins, sans-serif",
    color: "$gray700",
    fontSize: "14px",
  },

  ".cross": {
    backgroundColor: "$lemon700",
    width: "100%",
    height: "2px",
    margin: "10px 0",
  },
});
