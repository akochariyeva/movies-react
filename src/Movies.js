import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/movies_database")
      .then((response) => response.json())
      .then((json) => setMovies(json));
  }, []);

  return (
    <Box>
      <Typography variant="h3" component="h2" marginBottom={5}>
        Movies
      </Typography>
      <Grid container spacing={2} direction="row" justify="flex-start" alignItems="flex-start">
        {movies.map((movie) => (
          <Grid item xs={12} key={movie.id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
      {movies.map((movie) => movie.Series_Title)}
    </Box>
  );
};

export default Movies;
