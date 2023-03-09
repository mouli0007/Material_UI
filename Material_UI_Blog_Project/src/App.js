import "./App.css";
import { Button, makeStyles,Grid} from "@mui/material";
import { SendSharp } from "@mui/icons-material";
import { DeleteForever } from "@mui/icons-material";
import { Container, createMuiTheme } from "@mui/material";
import Header from "./components/Header";
import { ClassNames, ThemeProvider } from "@emotion/react";
import FeaturedPost from "./components/FeaturedPost";
import PostCard from "./components/PostCard";
import { sidebar } from "./data/data";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

function App() {
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header />
        <FeaturedPost />
        <br />
        <Grid container spacing={4}>
          {FeaturedPost.map((post) => {
            <PostCard post={post} key={post.title} />;
          })}
        </Grid>
        <Grid container spacing={5} className={ClassNames.mainGrid}>
          <Main title="from the Firehouse" />
          <Sidebar sidebar={sidebar} />
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
