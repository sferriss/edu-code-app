import {createTheme} from "@mui/material";

export const Theme = createTheme({
    components: {
        MuiAccordion: {
            styleOverrides: {
                root: {
                    border: "2px solid white",
                    backgroundColor: "#373c43",
                    color: "#e5e5e5",
                    ":hover": {
                        backgroundColor: "#202225",
                    },
                    "&.Mui-expanded": {
                        backgroundColor: "#202225",
                    },
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontSize: "18px",
                    fontWeight: "bold",
                }
            }
        },
    }
});