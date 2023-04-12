const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor:"black",
    color: "white",
    fontSize: "19px",
  },
}));
const App = () => {
  const btnClass = useStyles();
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<Save />}
        className={btnClass.button}
      >
        Material UI
      </Button>
    </div>
  );
};
