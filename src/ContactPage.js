import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/contact_form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, email: email, message: message }),
    });
  };

  return (
    <Box>
      <Typography variant="h3" component="h3" sx={{ textAlign: "center", textTransform: "uppercase", paddingTop: "10px" }}>
        Contact Us
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField fullWidth label="Your name" sx={{ margin: "10px 0" }} value={name} onChange={(e) => setName(e.target.value)} />
        <TextField fullWidth label="Your email" sx={{ margin: "10px 0" }} value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField
          fullWidth
          multiline
          label="Your message"
          sx={{ margin: "10px 0" }}
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type="submit" variant="contained" fullWidth sx={{ background: "#edbf17" }}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ContactPage;
