import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`}>
      <Card>
        <CardActionArea>
          <CardMedia component="img" height="140" image={movie.Poster_Link} alt="Movie poster" />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ height: "60px", overflow: "hidden", display: "-webkit-box", "-webkit-line-clamp": "2", "-webkit-box-orient": "vertical" }}
            >
              {movie.Series_Title}
            </Typography>
            <Typography
              sx={{ height: "120px", overflow: "hidden", display: "-webkit-box", "-webkit-line-clamp": "6", "-webkit-box-orient": "vertical" }}
              variant="body2"
              color="text.secondary"
            >
              {movie.Overview}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default MovieCard;
