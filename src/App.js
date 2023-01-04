import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Box } from "@mui/material";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import MoviesPage from "./Movies";
import ContactPage from "./ContactPage";
import bgImage from "./assets/imdb.jpg";
import MovieDetail from "./MovieDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Box sx={{ backgroundImage: `url(${bgImage})`, position: "fixed", width: "100%", height: "100%", zIndex: 0 }} />
        <Container maxWidth="md">
          <Box sx={{ bgcolor: "white", padding: 2, position: "relative", zIndex: 1 }}>
            <Navbar />
            <Routes>
              <Route exact element={<HomePage />} path="/" />
              <Route element={<MoviesPage />} path="/movies" />
              <Route element={<MovieDetail />} path="/movies/:movieID" />
              <Route element={<ContactPage />} path="/contact" />
            </Routes>
          </Box>
        </Container>
      </Router>
    </div>
  );
}

export default App;
