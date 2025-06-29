import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CircularProgress,
  Avatar,
  InputBase,
  Paper,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import FlightIcon from "@mui/icons-material/Flight";
import PublicIcon from "@mui/icons-material/Public";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MapIcon from "@mui/icons-material/Map";
import SearchAirports from "../api/searchAirport";

export default function AirportCard({ImgData}) {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchDone, setSearchDone] = useState(false);
  const [airPorts , setAirPorts] = useState([]);

  const handleSearch = async(e) => {
    console.log("Search Input:", searchValue);
    e.preventDefault();
    if (!searchValue.trim()) return;
    setLoading(true);
    setSearchDone(true);
    const airportsLocal = await SearchAirports(searchValue);
    console.log(airportsLocal, "AirplaneCard_Airplane_API");
    setAirPorts(airportsLocal);
    // Simulate search (replace with actual API)
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleUseLocation = () => {
    console.log("Using your location to find the nearest airport...");
  };

  return (
    <Box sx={{ px: 3, py: 4 }}>
      {/* 🔍 Search Bar */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        alignItems="center"
        gap={2}
        mb={4}
      >
        <Paper
          component="form"
          onSubmit={handleSearch}
          sx={{
            p: "4px 12px",
            display: "flex",
            alignItems: "center",
            width: "100%",
            borderRadius: 2,
            boxShadow: 0,
          }}
          variant="outlined"
        >
          <InputBase
            placeholder="Search by city, airport or region..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            sx={{ flex: 1, fontSize: 14 }}
            inputProps={{ "aria-label": "search airports" }}
          />
          <IconButton type="submit" sx={{ p: 1 }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>

        <Button
          variant="outlined"
          startIcon={<MyLocationIcon />}
          onClick={handleUseLocation}
        >
          Use My Location
        </Button>
      </Box>

      {/* 🧘 Empty State */}
      {!searchDone && (
        <Box textAlign="center" mt={6}>
          <img
            src={ImgData}
            alt="Airplane Illustration"
            width={250}
            style={{ opacity: 0.5 }}
          />
          <Typography variant="h6" mt={2} color="text.secondary">
            Enter a city or region to search for airports
          </Typography>
        </Box>
      )}

      {/* ⏳ Loading Spinner */}
      {loading && (
        <Box textAlign="center" mt={6}>
          <CircularProgress />
          <Typography variant="body2" mt={1}>
            Searching for airports...
          </Typography>
        </Box>
      )}

      {/* ✈️ Results */}
      {!loading && searchDone && airPorts?.data?.length > 0 && (
        <Grid container spacing={3}>
          {airPorts?.data?.map((airport, index) => {
            const {
              skyId,
              presentation: { title, subtitle },
              navigation: { entityType, localizedName },
            } = airport;

            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  elevation={3}
                  sx={{
                    borderRadius: 3,
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.02)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardContent>
                    <Box display="flex" alignItems="center" gap={1} mb={1}>
                      <Avatar sx={{ bgcolor: "primary.main" }}>
                        <FlightIcon fontSize="small" />
                      </Avatar>
                      <Typography variant="h6" fontWeight="bold">
                        {title} ({skyId})
                      </Typography>
                    </Box>

                    <Typography variant="body2" color="text.secondary" mb={1}>
                      {subtitle || "No country info"}
                    </Typography>

                    <Box display="flex" alignItems="center" gap={1} mb={1}>
                      <PublicIcon color="action" fontSize="small" />
                      <Typography variant="body2">{entityType}</Typography>
                    </Box>

                    <Box display="flex" alignItems="center" gap={1}>
                      <LocationOnIcon color="action" fontSize="small" />
                      <Typography variant="body2">{localizedName}</Typography>
                    </Box>

                    <Box mt={2} display="flex" justifyContent="flex-end">
                      <IconButton
                        size="small"
                        title="View on map"
                        onClick={() => console.log("Clicked Airport:", airport)}
                      >
                        <MapIcon />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      )}

      {/* 🫥 No Results */}
      {!loading && searchDone && airPorts?.data?.length === 0 && (
        <Box textAlign="center" mt={6}>
          <Typography variant="h6" color="text.secondary">
            No airports found for your search.
          </Typography>
        </Box>
      )}
    </Box>
  );
}
