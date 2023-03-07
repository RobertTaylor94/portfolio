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
          height: "60vh",
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
                Technologies
              </Typography>
              <Typography variant="body" color="text.secondary">
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
              <Typography variant="body" color="text.secondary">
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
              <Typography variant="body" color="text.secondary">
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
