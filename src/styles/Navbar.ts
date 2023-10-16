import { styled } from ".";

export const NavbarContainer = styled("nav", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  width: "3.5vw",
  padding: "1rem",
  // height: "auto",
  minHeight: "80vh",

  backgroundColor: "$lemon700",
  borderRadius: "0 1rem 1rem 0",

  div: {
    height: "25vh",
    display: "flex",
    marginTop: "2rem",
    flexDirection: "column",
    justifyContent: "space-around",
  },
});
