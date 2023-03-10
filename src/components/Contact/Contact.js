import React from "react";
import { Container, Typography, TextField, Button, Grid } from "@mui/material";

function Contact() {
  return (
    <Container>
      <Typography variant="h4" align="center" marginTop={3} marginBottom={3}>
        Contact Me
      </Typography>
      <form
        method="POST"
        name="contactForm"
        netlify
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contactForm" />
        <TextField id="name" label="Name" fullWidth margin="normal" name="name" />
        <TextField id="email" label="Email" fullWidth margin="normal" name="email" />
        <TextField
          id="message"
          label="Message"
          name="message"
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
            <a href="mailto:rjt903@gmail.com">rjt903@gmail.com</a>
          </Typography>
          <Typography gutterBottom>Phone: +44 7543 523 834</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Links
          </Typography>
          <Typography gutterBottom>
            <a target="_blank" rel="noreferrer" href="https://github.com/RobertTaylor94">GitHub</a>
          </Typography>
          <Typography gutterBottom>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/robert-taylor-7b2a0325b/">
              LinkedIn
            </a>
          </Typography>
          <Typography gutterBottom>
            <a href={process.env.PUBLIC_URL + "resume.pdf"} download>
              Download Resume
            </a>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
