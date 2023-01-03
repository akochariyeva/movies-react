import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movies/${movie?.id}`}>
      <Box sx={{ boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }} p={2}>
        <Box display="flex" width={"100%"}>
          <Box component="img" src={movie?.Poster_Link} />
          <Box ml={3} display="flex" flexDirection="column" alignItems="flex-start" width={"100%"}>
            <Typography component="h5" variant="h5">
              {movie?.Series_Title}
            </Typography>
            <Typography>
              IMDB Rating:
              <Typography component="span" sx={{ marginLeft: 1, color: "black" }}>
                {movie?.IMDB_Rating}
              </Typography>
            </Typography>
            <Typography>
              Genres:
              <Typography component="span" sx={{ marginLeft: 1, color: "black" }}>
                {movie?.Genre}
              </Typography>
            </Typography>
            <Typography>
              Runtime:
              <Typography component="span" sx={{ marginLeft: 1, color: "black" }}>
                {movie?.Runtime}
              </Typography>
            </Typography>
          </Box>
        </Box>
        <Box mt={3}>
          <Typography>
            Overview
            <Typography component="span" sx={{ marginLeft: 1, color: "black" }}>
              {movie?.Overview.slice(0, 100)}
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default MovieCard;
