import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Box>
      <Typography variant="h3" component="h2">
        Contact
      </Typography>
      <Box component="form">
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
      </Box>
    </Box>
  );
};

export default ContactPage;
