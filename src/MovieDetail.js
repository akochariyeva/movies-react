import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetail = () => {
  const { movieID } = useParams();
  const navigate = useNavigate();
  const [movieDetail, setMovieDetail] = useState();

  useEffect(() => {
    fetch(`http://localhost:8000/movies_database/${movieID}`)
      .then((response) => response.json())
      .then((json) => setMovieDetail(json));
  }, [movieID]);

  return (
    <Box>
      <Button onClick={() => navigate(-1)} variant="contained" sx={{ background: "#992006", marginBottom: 3 }}>
        Go back
      </Button>
      <Typography variant="h3" component="h2" marginBottom={5}>
        {movieDetail?.Series_Title}
      </Typography>
      <Grid container spacing={2} direction="row">
        <Grid item sm={6} display="flex" justifyContent="center">
          <Box sx={{ height: 400, objectFit: "contain" }} component="img" src={movieDetail?.Poster_Link} />
        </Grid>
        <Grid item sm={6}>
          <Typography>
            Overview:
            <Typography component="span" sx={{ marginLeft: 1, color: "black" }}>
              {movieDetail?.Overview.slice(0, 100)}
            </Typography>
          </Typography>
          <Typography>
            IMDB:
            <Typography component="span" sx={{ marginLeft: 1, color: "black" }}>
              {movieDetail?.IMDB_Rating}
            </Typography>
          </Typography>

          <Typography>
            Genre:
            <Typography component="span" sx={{ marginLeft: 1, color: "black" }}>
              {movieDetail?.Genre}
            </Typography>
          </Typography>
          <Typography>
            Runtime:
            <Typography component="span" sx={{ marginLeft: 1, color: "black" }}>
              {movieDetail?.Runtime}
            </Typography>
          </Typography>
          <Typography>
            Year:
            <Typography component="span" sx={{ marginLeft: 1, color: "black" }}>
              {movieDetail?.Released_Year}
            </Typography>
          </Typography>
          <Typography>
            Director:
            <Typography component="span" sx={{ marginLeft: 1, color: "black" }}>
              {movieDetail?.Director}
            </Typography>
          </Typography>
          <Typography>
            Famous stars:
            <Typography component="span" sx={{ marginLeft: 1, color: "black" }}>
              {movieDetail?.Star1}, {movieDetail?.Star2}, {movieDetail?.Star3}, {movieDetail?.Star4}
            </Typography>
          </Typography>
          <Typography>
            Certificate:
            <Typography component="span" sx={{ marginLeft: 1, color: "black" }}>
              {movieDetail?.Certificate}
            </Typography>
          </Typography>
          <Typography>
            Gross:
            <Typography component="span" sx={{ marginLeft: 1, color: "black" }}>
              {movieDetail?.Gross}
            </Typography>
          </Typography>
          <Typography>
            Number of votes:
            <Typography component="span" sx={{ marginLeft: 1, color: "black" }}>
              {movieDetail?.No_of_Votes}
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MovieDetail;
