import { Typography } from "@mui/material";
import { Container, Box } from "@mui/system";
import ImageCollage from "./components/ImageCollage";
import React from "react";
import { StandardImageList } from "./components/ImageCollage";
const Tour = () => {
  return (
    <Container
      sx={{
        width: 900,
      }}
    >
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World in Vegas
      </Typography>

      <Box marginTop={3} sx={{ display: "flex" }}>
        <img src="image" alt="image" height={325} />
        <StandardImageList />
      </Box>

      <Box>
        <Typography>Frequently Asked Questions</Typography>
      </Box>
    </Container>
  );
};

export default Tour;
