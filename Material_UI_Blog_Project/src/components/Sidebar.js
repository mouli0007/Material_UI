import { Link } from "@mui/material";
import React from "react";

const Sidebar = ({ archives, description, social, title }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} className={classes.sidebarAboutBox}>
        <Typography vaiant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>

        <Typography
          variant="h6"
          gutterBottom
          className={classes.sidebarSectionn}
        >
          Archives
        </Typography>

        {archives.map((archive) => {
          <Link
            display="block"
            variant="body1"
            href={archive.url}
            key={archive.title}
          ></Link>;
        })}

        <Typography
          variant="h6"
          gutterBottom
          className={classes.sidebarSection}
        >
          Social
        </Typography>

        {social.map((network) => {
          <Link display="block" variant="body1" href="#" key={network.name}>
            <Grid container direction="row" spacing={1} alignItems="center">
              <Grid item>
                <network.icon />
              </Grid>
              <Grid item>{network.name}</Grid>
            </Grid>
          </Link>;
        })}
      </Paper>
    </Grid>
  );
};

export default Sidebar;
