import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  makeStyles,
    Hidden,
    Typography,
  CardMedia
} from "@mui/material";
import React from "react";

const useStyles = makeStyles({
  card: {
    display: "flex",
  },

  cardDetails: {
    flex: 1,
  },

  cardMedia: {
    width: 160,
  },
});

const PostCard = ({ post }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography component="subtitle1" color="textSecondary">
                {post.date}
              </Typography>
              <Typography component="subtitle1" paragraph>
                {post.description}
              </Typography>
              <Typography component="subtitle1" style={{ color: "skyblue" }}>
                continue readding...
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia
              classNAme={classes.cardMedia}
              image={post.image}
              title={post.imageTitle}
            />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default PostCard;
