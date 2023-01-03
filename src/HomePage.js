import React from "react";
import { Box, Typography, Card, CardActionArea, CardMedia, CardContent } from "@mui/material";
const HomePage = () => {
  return (
    <div>
      <Box>
        <Typography variant="h3" component="h2">
          Welcome
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, optio iste minima quas odit, ducimus harum corrupti consequatur
          dolores officiis et quisquam, eos est perspiciatis architecto? Veritatis similique possimus ipsam?
        </Typography>
      </Box>
      <Box mt={5}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://images.unsplash.com/photo-1671725501844-1e6d0081bf64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Card 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ marginTop: 5 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://images.unsplash.com/photo-1670272499188-79fe22656f64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="card"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Card 2
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ marginTop: 5 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://images.unsplash.com/photo-1670272498425-e13ce4fcf5f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="card"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Card 3
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </div>
  );
};

export default HomePage;
