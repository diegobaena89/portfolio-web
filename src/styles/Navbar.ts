import { styled } from ".";

export const NavbarContainer = styled("nav", {
  display: "flex",
  flexDirection: "column",
  width: "3.5vw",
  padding: "1rem",
  height: "80vh",
  alignItems: "center",

  backgroundColor: "$lemon700",
  borderRadius: "0 1rem 1rem 0",

  div: {
    height: "40vh",
    display: "flex",
    marginTop: "2rem",
    flexDirection: "column",
    justifyContent: "space-around",
  },
});
