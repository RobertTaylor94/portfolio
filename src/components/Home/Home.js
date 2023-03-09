import React from "react";
import {
  Skeleton,
  Box,
  Container,
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import "./home.css";
// import banner from '/images/banner.jpeg';

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
              <Typography variant="body" color="text.primary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
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
              <Typography variant="body" color="text.primary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
