import { Button, Tabs } from "@chakra-ui/react";
import { styled } from "@stitches/react";

export const CustomTabs = styled(Tabs, {
  img: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    // margin: "20px 0",
    colorScheme: "gray !important",
    borderRadius: "inherit",
  },

  p: {
    fontFamily: "Poppins, sans-serif",
  },

  h4: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: 400,
    color: "$gray400",
    margin: "5px 0",
  },
});

export const CustomButtom = styled(Button, {
  size: "sm",
  backgroundColor: "transparent !important",
  border: "1px solid #f69d7b !important",
  color: "#f69d7b !important",
  margin: "0 5px",
});
