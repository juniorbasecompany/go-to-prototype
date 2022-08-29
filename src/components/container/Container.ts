import { styled } from "@stitches/react";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "10px",
  backgroundColor: "white",
  

  variants: {
    size: {
      sm: {
        width: "100%",
        height: "50px",
      },
      lg: {
        width: "100%",
        height: "60px",
      },
    },
    align: {
      // apply styles to the `bp1` breakpoint      
      center: {
        '@media only screen and (min-width: 600px)': {
          alignItems: "center",
        },
      },
      left: {
        alignItems: "flex-start",
      },
      right: {
        alignItems: "flex-end",
      },
    },
  },
});