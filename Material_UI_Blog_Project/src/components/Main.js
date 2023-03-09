import { Grid, Typography, Divider } from "@mui/material";
import React from "react";
import { posts } from "../data/data";

const Main = ({ title }) => {
  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post) => {
          <Markdown key={post.body}>
            
        </Markdown>;
      })}
    </Grid>
  );
};

export default Main;
