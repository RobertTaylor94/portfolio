import React from "react";
import {
  Box,
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip
} from "@mui/material";
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import "./home.css";

function Home() {
  return (
    <div>
      <Box
        component="img"
        src={process.env.PUBLIC_URL + "/images/banner.jpeg"}
        sx={{
          height: "65vh",
          objectFit: "cover",
          width: "100vw",
          overflow: "hidden",
        }}
      ></Box>
      <Paper
        elevation={5}
        sx={{
          width: "60vw",
          margin: "0 auto",
          marginTop: "30px",
          marginBottom: "30px",
          padding: "20px",
        }}
      >
        <Typography variant="h4">
          "Programming isn’t about what you know; it’s about what you can figure
          out."
        </Typography>
        <Typography variant="h6">- Chris Pine</Typography>
      </Paper>
      <Grid container spacing={2} justifyContent="center" marginBottom="30px">
        <Grid item xs={12} md={4} lg={3}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h4">
                About Me
              </Typography>
              <Typography variant="body" color="text.primary">
                Hello! My name is Robert and I have been working as a paediatric
                nurse for the last three years in central London. I love my job
                but I have always been incredibly interested in all things tech
                and I'm so exicted to finally have the opportunity to move into
                a new career. 
                <br />
                <br />
                Over the past year I have been teaching myself the
                Swift language used by Apple in their ecosystem and I've had so
                much fun creating apps and experimenting with all of their APIs.
                Now I'm ready to take on a new challenge and have been so lucky
                to earn a place on a Front-End Web Development Bootcamp. 
                <br />
                <br />
                The EdX course is proving to be a great challenge but one I am working
                hard to complete. We have already learnt so much and I can't
                wait to continue building sites to show off and expanding my
                skillset.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h4">
                Technologies
              </Typography>
              <Chip label="HTML" color="secondary" icon={<HtmlIcon />} sx={{ margin: "5px" }} />
              <Chip label="CSS" color="secondary" icon={<CssIcon />} sx={{ margin: "5px" }}/>
              <Chip label="JavaScript" color="secondary" icon={<JavascriptIcon />} sx={{ margin: "5px" }}/>
              <Chip label="Node.Js" color="secondary"sx={{ margin: "5px" }} />
              <Chip label="NPM" color="secondary" sx={{ margin: "5px" }} />
              <Chip label="Swift" color="secondary" sx={{ margin: "5px" }} />
              <Chip label="SwiftUI" color="secondary" sx={{ margin: "5px" }} />
              <Chip label="React" color="secondary" sx={{ margin: "5px" }} />
              <Chip label="RealmDB" color="secondary" sx={{ margin: "5px" }} />
              <Chip label="Bootstrap" color="secondary" sx={{ margin: "5px" }} />
              <Chip label="Material UI" color="secondary" sx={{ margin: "5px" }} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
