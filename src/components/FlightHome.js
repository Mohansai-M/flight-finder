import { Box, Typography } from "@mui/material";
import LandingSearchBar from "./LandingSearchBar";

export default function FlightHome(props) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%", // force full screen width
        height: "100vh",
        overflow: "hidden",
        margin: 0,
        padding: 0,
        backgroundImage: `
      linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(https://content.skyscnr.com/m/3719e8f4a5daf43d/original/Flights-Placeholder.jpg)
    `,
        backgroundSize: "cover", // fills container
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
      }}
    >
      <Box textAlign="center">
        <Typography variant="h4">Welcome to the Flight Search App</Typography>
        <Typography variant="body1" mt={2} mb ={8}>
          Use the navigation above to explore nearby airports, search flights,
          or airport suggestions.
        </Typography>
        <LandingSearchBar />
      </Box>
    </Box>
  );
}
