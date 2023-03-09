import React from "react";
import "./project.css";
import { Paper, Button, Link, Typography, Box, Container } from "@mui/material";

function Project(props) {
  return (
    <Paper sx={{ height: "60vh" }}>
        {/* Display header and deescription for app using data from projects.json */}
      <Typography variant="h2" align="center">
        {props.item.name}
      </Typography>
      <Typography variant="body1" align="center">
        {props.item.desc}
      </Typography>
      <Box display="flex" justifyContent="center">
        <Typography
          display="inline"
          variant="body1"
          sx={{ fontWeight: "bold" }}
        >
          Technologies
        </Typography>{" "}
        <Typography display="inline" variant="body1">
          {props.item.tech}
        </Typography>
      </Box>

        {/* image of the current app/project */}
        

        {/* Centered buttons with links to github repo and deployed site for each project */}
      <Box
    //   Uses a MUI Box to center the buttons and place them at the bottom of the container
        display="flex"
        justifyContent="center"
        position="absolute"
        bottom={0}
        width="100vw"
      >
        <Button
          variant="contained"
          href={props.item.repoLink}
          sx={{ margin: "10px" }}
        >
          Repo
        </Button>
        <Button
          variant="contained"
          href={props.item.deployedLink}
          sx={{ margin: "10px" }}
        >
          Deployed Site
        </Button>
      </Box>
    </Paper>
  );
}

export default Project;
