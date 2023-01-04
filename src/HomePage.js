import { Box, Typography, Grid } from "@mui/material";
import person1 from "./assets/person1.jpeg";
import person2 from "./assets/person2.jpeg";
import person3 from "./assets/person3.jpeg";

const HomePage = () => {
  return (
    <div>
      <Box>
        <Typography variant="h3" component="h2">
          Homepage
        </Typography>
      </Box>
      <Box mt={5}>
        <Grid container>
          <Box display="flex" mb={3}>
            <Box component="img" mr={3} src={person2} width="200px" height="200px" sx={{ objectFit: "cover" }} />
            <Box width="70%">
              <Typography component="h5" variant="h5">
                Asima Kochariyeva
              </Typography>
              <Typography variant="body2" color="text.secondary">
                I am Asima Kochariyeva. It is my 3'rd year at ADA University and my faculty is Information Technologies. Moreover, I was a Teaching
                Assistant at Stanford Education Centre and I was teaching Microsoft Office Programs so at the end i got a certificate. I am a Social
                Media Manager at ADA empowHERment Club. Additionally, I am a Volunteer at ADA Volunteer Movement. In 5-12 September 2022, I was
                registering newly admitted students on portal.edu.az and ada.edu.az websites. At the end, I also took a survey about where and how did
                they get information about ADA University and which school they studied and so on from each student. I also love being active and
                managing time efficiently. I often join some projects, events, masterclass trainings and etc. For detailed explanation, you can view
                which projects I attended on <a href="https://www.linkedin.com/in/asima-kochariyeva-65b643224">my LinkedIn </a> Profile.
              </Typography>
            </Box>
          </Box>
          <Box display="flex" mb={3}>
            <Box component="img" mr={3} src={person1} width="200px" height="200px" sx={{ objectFit: "cover" }} />
            <Box width="70%">
              <Typography component="h5" variant="h5">
                Narmin Hasanova
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Name & Surname: Narmin Hasanova Age:21 Job: Data Scientist Work place: Unibank Faculty:IT{" "}
              </Typography>
            </Box>
          </Box>
          <Box display="flex" mb={3}>
            <Box component="img" mr={3} src={person3} width="200px" height="200px" sx={{ objectFit: "cover" }} />
            <Box width="70%">
              <Typography component="h5" variant="h5">
                Farid Mehdiyev
              </Typography>
              <Typography variant="body2" color="text.secondary">
                20 years old - Positive, proactive, and results-driven specialist, with a programmer background. Possesses excellent interpersonal,
                communication, and negotiation skills and the ability to develop and maintain mutually beneﬁcial internal and external relationships.
                Enjoys being a part of a work team, as well as managing, motivating and training, a successful and productive team, and thrives in
                highly pressurized and challenging working environments.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Box>
    </div>
  );
};

export default HomePage;
