import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography, Box, Rating } from "@mui/material";
import { AccessTime } from "@mui/icons-material";

import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 9,
          },
        },

        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

const TourCard = ({ tour }) => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={2}>
          <img className="img" src={tour.image} alt="" />
          <Box padding={1}>
            <Typography variant="subtitle1" component="h4">
              {tour.name}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <AccessTime
              sx={{
                width: 14.5,
              }}
            />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              {tour.duration}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            marginTop={2}
            paddingLeft={1}
          >
            <Rating
              name="read-only"
              value={tour.rating}
              precision={0.5}
              size="small"
              readOnly
            />

            <Typography
              variant="body2"
              component="p"
              marginLeft={0.5}
              fontSize={15}
            >
              {tour.rating}
            </Typography>
            <Typography
              variant="body3  "
              component="p"
              marginLeft={1.5}
              fontSize={13}
            >
              {tour.numberOfReviews} reviews
            </Typography>
          </Box>
          <Box variant="h6" component="h3" marginTop={0} paddingLeft={1}>
            From C {tour.price}
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
