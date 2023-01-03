import { Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const navItems = ["Home", "Movies", "Contact"];
  return (
    <Box sx={{ textAlign: "center" }}>
      <List sx={{ display: "flex", justifyContent: "space-evenly" }}>
        {navItems.map((item, key) => (
          <NavLink
            key={key}
            to={item === "Home" ? "/" : item.toLowerCase()}
            style={({ isActive }) => (isActive ? { textDecoration: "underline" } : undefined)}
          >
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Box>
  );
};

export default Navbar;
