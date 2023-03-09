import {
  CardContent,
  Card,
  Typography,
  CardActions,
  Button,
  makeStyles,
  createMuiTheme,
} from "@mui/material";
import React from "react";
const useStyles = makeStyles({
  title: {
    fontSize: 40,
    fontFamily: "Montserrat",
  },

  cover: {
    backGround: `url(image) center center/cover`,
    padding: "35px 25px ",
  },
});
const FeaturedPost = () => {
  const classes = useStyles();

  return (
    <Card className={classes.cover}>
      <CardContent className={classes.textContainer}>
        <Typography className={classes.title} gutterBottom>
          Title of a Longer Featured Blog Post
        </Typography>
        <Typography variant="h5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore eos
          in atque, iste nobis saepe maiores alias at est deserunt.
        </Typography>
      </CardContent>

      <CardActions>
        <Button variant="text" color="inherit">
          Read More...
        </Button>
      </CardActions>
    </Card>
  );
};

export default FeaturedPost;
