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
      <Typography  variant="h3" component="h3" sx={{ textAlign: "center", textTransform: "uppercase", paddingTop: "10px" }} marginBottom={5}>
        All Movies
      </Typography>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {movies.map((movie) => (
          <Grid item xs={12} key={movie.id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Movies;
