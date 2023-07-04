import { createTheme } from "@mui/material";

const font = "'Poppins', sans-serif";

const theme = createTheme({
    palette: {
        primary: {
          main: "#222224",
          light: "#272729",
        },
        secondary: {
          main: "#73CB43",
          light: "#74C042",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#f2f2f2"
        }
      },
        typography: {
            fontFamily: font,
            h1: { fontWeight: 600 },
            h2: { fontWeight: 500 },
            h3: { fontWeight: 400 },
            h4: { fontWeight: 300 },
            h5: { fontWeight: 300 },
            h6: { fontWeight: 300 }
        },

        breakpoints: {
            values: {
                xs: 0,
                sm: 700,
                md: 1100,
                lg: 1500,
                xl: 1800
            }
        }

    });
export default theme;