import React from "react";
import { Paper, Button, Link, Typography, Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Project from "../Project/Project";
import projectData from "../../projects.json";

function Projects() {
  return (
    <Box sx={{ height: "70vh" }}>
      <Carousel animation="slide" height="60vh" autoPlay="false" interval={10000} navButtonsAlwaysVisible="true">
        {projectData.map((item, i) => (
          <Project key={i} item={item} />
        ))}
      </Carousel>
    </Box>
  );
}

export default Projects;
