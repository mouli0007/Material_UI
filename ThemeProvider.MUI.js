import { createTheme } from "@mui/material";
import { purple, red } from "@mui/material/colors";
export const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
  },
  myButton: {
    backgroundColor: red[500],
    color: "White",
    border: "1px solid black",
  },
});

// How To Use it 
const useStyles = makeStyles((theme) => ({
  button: {
    ...theme.myButton
  },
}));
