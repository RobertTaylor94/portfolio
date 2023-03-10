import React from "react";
import "./project.css";
import {
  Paper,
  Button,
  Link,
  Typography,
  Box,
  Container,
  Stack,
} from "@mui/material";

function Project(props) {
  return (
    <Paper sx={{ height: "100%" }}>
      <Stack display="flex" spacing={1} height="100%">
        {/* Display header and description for app using data from projects.json */}
        <Typography variant="h2" align="center" sx={{}}>
          {props.item.name}
        </Typography>
        <Typography variant="body1" align="center" sx={{}}>
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
        <Box display="flex" justifyContent="center" height={20} sx={{ flexGrow: "1" }}>
          <img
            src={process.env.PUBLIC_URL + props.item.img}
            alt={props.item.name + " screenshot"}
            style={{ overflow: "hidden", objectFit: "contain", height: "100%" }}
          />
        </Box>

        {/* Centered buttons with links to github repo and deployed site for each project */}
        <Box
          //   Uses a MUI Box to center the buttons and place them at the bottom of the container
          display="flex"
          justifyContent="center"
          // position="absolute"
          // bottom={0}
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
      </Stack>
    </Paper>
  );
}

export default Project;
