import { styled } from ".";

export const MainContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

export const HomeContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "1.5rem",
  //   justifyContent: "center",
  //   alignItems: "center",
  height: "80vh",
  width: "70vw",
  backgroundColor: "$white",
  borderRadius: "1rem 0 0 1rem",
  border: "1px solid $gray100",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
});
