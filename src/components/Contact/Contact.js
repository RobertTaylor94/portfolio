import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid
} from "@mui/material";

function Contact() {
  return (
    <Container>
      <Typography variant="h4" align="center" marginTop={3} marginBottom={3}>
        Contact Me
      </Typography>
      <form method="POST" name="contactForm" netlify netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contactForm" />
        <TextField id="name" label="Name" fullWidth margin="normal" />
        <TextField id="email" label="Email" fullWidth margin="normal" />
        <TextField
          id="message"
          label="Message"
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />
        <Button variant="contained" color="primary" fullWidth type="submit">
          Submit
        </Button>
      </form>
      <Grid container spacing={2} marginTop={3}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Contact Details
          </Typography>
          <Typography gutterBottom>
            Email:{" "}
            <a href="mailto:your.email@example.com">your.email@example.com</a>
          </Typography>
          <Typography gutterBottom>Phone: +1 (555) 555-5555</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Links
          </Typography>
          <Typography gutterBottom>
            <a href="https://github.com/your-github-username">GitHub</a>
          </Typography>
          <Typography gutterBottom>
            <a href="https://www.linkedin.com/in/your-linkedin-username/">
              LinkedIn
            </a>
          </Typography>
          <Typography gutterBottom>
            <a href="/path/to/your/resume.pdf" download>
              Download Resume
            </a>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;