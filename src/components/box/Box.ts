import { styled } from "@stitches/react";

export const Box = styled("div", {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: "15px",

  variants: {
    align: {
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
    border: {
        none: { 
            border: "none"
        },
        solid: {
            border: "solid 1px #e6e6e6"
        }
    }
  },
});