import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  const App_Path = location?.pathname;

  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // show drawer below md

  const navLinks = [
    { label: "Nearby Airports", path: "/nearby" },
    { label: "Search Airports", path: "/airports" },
    { label: "Search Flights", path: "/flights" },
    { label: "Flight Details", path: "/details" },
    { label: "Flight Prices", path: "/flight_price" },
  ];

  return (
    <>
      <AppBar
        position={App_Path === "/" ? "absolute" : "relative"}
        elevation={App_Path === "/" ? 0 : 4}
        sx={{
          backgroundColor: App_Path === "/" ? "transparent" : "#fff",
          color: App_Path === "/" ? "#fff" : "#000",
          transition: "background-color 0.3s ease",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo / Brand */}
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              color: App_Path === "/" ? "#fff" : "inherit",
              fontWeight: "bold",
              letterSpacing: "1px",
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontFamily: "Roboto, sans-serif",
            }}
          >
            ✈️ FlightFinder
          </Typography>

          {/* Desktop Nav */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2 }}>
              {navLinks.map((link, idx) => (
                <Button
                  key={idx}
                  component={Link}
                  to={link.path}
                  sx={{
                    color: App_Path === "/" ? "#fff" : "#000",
                    fontWeight: 500,
                    borderRadius: 2,
                    paddingX: 2,
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      backgroundColor: "rgba(0,0,0,0.08)",
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>
          )}

          {/* Mobile Hamburger Icon */}
          {isMobile && (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 250, p: 2 }} role="presentation">
          <Typography variant="h6" gutterBottom>
            Menu
          </Typography>
          <List>
            {navLinks.map((link, idx) => (
              <ListItem
                button
                key={idx}
                component={Link}
                to={link.path}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText primary={link.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
