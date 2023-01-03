import { Box, Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/movies_database")
      .then((response) => response.json())
      .then((json) => setMovies(json));
  }, []);

  return (
    <Box>
      <Grid container spacing={2} direction="row" justify="flex-start" alignItems="flex-start">
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={3} key={movie.id}>
            <Card>
              <CardHeader title={movie.Series_Title} subheader={movie.Genre} />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Hello World
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {movies.map((movie) => movie.Series_Title)}
    </Box>
  );
};

export default Movies;
