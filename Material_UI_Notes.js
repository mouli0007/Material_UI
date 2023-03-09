

Materi_UI Main Components from Wrappers 

1=> Container
2=> Paper 
3=> Toolbar
4=>TypoGraphy
5=>Cards
6=>Grid

To our with css in  material UI in an effecient way we have to use Styles

Syntax : 

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },

  tagline: {
    fontSize: 20,
    textTransform: "uppercase",
    justifyContent: "center",
    fontFamily: "Montserrat",
  },
}));


######### The Way to Use it ############

  const classses = useStyles();
  
      <Typography variant="h6" className={classses.title}>
          Blogging WebSite
        </Typography>
		
		

#########  Material UI Theme Component ############

function App() {
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme }>
      <Container>
        <Header />
      </Container>
    </ThemeProvider>
  );
}
