import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Box } from "@mui/material";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import MoviesPage from "./Movies";
import ContactPage from "./ContactPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Container maxWidth="md">
          <Box sx={{ bgcolor: "white", height: "100vh" }}>
            <Navbar />
            <Routes>
              <Route exact element={<HomePage />} path="/" />
              <Route element={<MoviesPage />} path="/movies" />
              <Route element={<ContactPage />} path="/contact" />
            </Routes>
          </Box>
        </Container>
      </Router>
    </div>
  );
}

export default App;
