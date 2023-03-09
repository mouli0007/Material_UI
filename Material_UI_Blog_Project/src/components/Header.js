import {
  Toolbar,
  Divider,
  IconButton,
  Typography,
  Badge,
  makeStyles,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";

import { SideDrawer } from "./SideDrawer";
const useStyles = makeStyles({
  title: {
    flexGrow: 1,
  },

  tagline: {
    fontSize: 20,
    textTransform: "uppercase",
    justifyContent: "center",
    fontFamily: "Montserrat",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Toolbar>
        <SideDrawer>
          <IconButton color="inherit">
            <MenuIcon color="secondary" />
          </IconButton>
        </SideDrawer>
        <Typography variant="h6" className={classes.title}>
          Blogging WebSite
        </Typography>

        <IconButton color="inherit">
          <Badge badgeContent={4} color="primary">
            <NotificationIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
      <Divider />
      <Toolbar className={classes.tagline}>
        Express Your Emotions through words
      </Toolbar>
    </>
  );
};

export default Header;
