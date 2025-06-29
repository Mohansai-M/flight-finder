import { useEffect, useState } from "react";
import {
  Typography,
  Grid,
  Box,
  Divider,
  Paper,
  Avatar,
  Button,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import SearchFlights from "../api/searchFlights";

import { fetchAirports } from "./FlightSuggestions";
import { useLocation } from "react-router-dom";

export default function FlightCard({ OnOriginIdChange , OnDestinicationChange }) {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [FlightCards, setFlighCards] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [from, setFrom] = useState(queryParams.get("fromSkyId") || "");
  const [to, setTo] = useState(queryParams.get("toSkyId") || "");
  const [departDate, setDepartDate] = useState(queryParams.get("departDate") || null);
  const [returnDate, setReturnDate] = useState(null);
  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);
  const [selectedFromSkyId, setSelectedFromSkyId] = useState(queryParams.get("fromSkyId") || null);
  const [selectedToSkyId, setSelectedToSkyId] = useState(queryParams.get("toSkyId") || null);
  const [selectedFromEntityId, setselectedFromEntityId] = useState(queryParams.get("fromEntityId") || null);
  const [selectedToEntityId, setSelectedToEntityId] = useState(queryParams.get("toEntityId") || null);

  useEffect(() => {
    setImageUrl(FlightCards?.destinationImageUrl);
  }, [FlightCards]);


  const handleFromChange = async (value) => {
    setFrom(value);
    const suggestions = await fetchAirports(value);
    setFromSuggestions(suggestions);
  };
  
  const handleToChange = async (value) => {
    setTo(value);
    const suggestions = await fetchAirports(value);
    setToSuggestions(suggestions);
  };


  const handleSearch = async () => {
    const formatDate = (date) => date ? new Date(date).toISOString().split("T")[0] : "";

    const flightLocal = await SearchFlights(
      selectedFromSkyId,
      selectedToSkyId,
      formatDate(departDate),
      selectedFromEntityId,
      selectedToEntityId
    );
    setFlighCards(flightLocal);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ px: 2, width: "100%" }}>
        <Paper
          elevation={2}
          sx={{
            borderRadius: 2,
            p: 1.5,
            backgroundColor: "#ffffff",
            mb: 3,
            mt: 3,
            width: "100%",
            maxWidth: "1200px",
            mx: "auto",
          }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3, lg: 4 }}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} sm={6} md={2}>
              <Typography
                variant="caption"
                fontWeight={500}
                mb={0.5}
                display="block"
              >
                From
              </Typography>
              <Box position="relative">
                <TextField
                  variant="outlined"
                  size="small"
                  placeholder="Origin"
                  value={from}
                  onChange={(e) => {
                    setFrom(e.target.value);
                    handleFromChange(e.target.value, "from");
                  }}
                  fullWidth
                />
                {fromSuggestions.length > 0 && (
                  <Paper
                    elevation={3}
                    sx={{
                      fontFamily: "Roboto, sans-serif",
                      fontSize: "14px",
                      fontWeight: 400,
                      position: "absolute",
                      width: "100%",
                      maxHeight: 200,
                      overflowY: "auto",
                      zIndex: 10,
                      mt: 1,
                    }}
                  >
                    {fromSuggestions.map((airport, index) => (
                      <Box
                        key={index}
                        onClick={() => {
                          setFrom(airport.name);
                          setSelectedFromSkyId(airport.skyId);
                          OnOriginIdChange(airport.skyId);
                          setselectedFromEntityId(airport.entityId);
                          setFromSuggestions([]);
                        }}
                        sx={{
                          px: 2,
                          py: 1,
                          cursor: "pointer",
                          "&:hover": { backgroundColor: "#f5f5f5" },
                        }}
                      >
                        {airport.name} ({airport.skyId})
                      </Box>
                    ))}
                  </Paper>
                )}
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={2}>
              <Typography
                variant="caption"
                fontWeight={500}
                mb={0.5}
                display="block"
              >
                To
              </Typography>
              <Box position="relative">
                <TextField
                  variant="outlined"
                  size="small"
                  placeholder="Destination"
                  value={to}
                  onChange={(e) => {
                    setTo(e.target.value);
                    handleToChange(e.target.value, "to");
                  }}
                  fullWidth
                />
                {toSuggestions.length > 0 && (
                  <Paper
                    elevation={3}
                    sx={{
                      fontFamily: "Roboto, sans-serif",
                      fontSize: "14px",
                      fontWeight: 400,
                      position: "absolute",
                      width: "100%",
                      maxHeight: 200,
                      overflowY: "auto",
                      zIndex: 10,
                      mt: 1,
                    }}
                  >
                    {toSuggestions.map((airport, index) => (
                      <Box
                        key={index}
                        onClick={() => {
                          setTo(airport.name);
                          setSelectedToSkyId(airport.skyId);
                          OnDestinicationChange(airport.skyId);
                          setSelectedToEntityId(airport.entityId);
                          setToSuggestions([]);
                        }}
                        sx={{
                          px: 2,
                          py: 1,
                          cursor: "pointer",
                          "&:hover": { backgroundColor: "#f5f5f5" },
                        }}
                      >
                        {airport.name} ({airport.skyId})
                      </Box>
                    ))}
                  </Paper>
                )}
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={2}>
              <Typography
                variant="caption"
                fontWeight={500}
                mb={0.5}
                display="block"
              >
                Depart
              </Typography>
              <DatePicker
                value={departDate}
                onChange={(val) => setDepartDate(val)}
                slotProps={{
                  textField: {
                    variant: "outlined",
                    size: "small",
                    fullWidth: true,
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={2}>
              <Typography
                variant="caption"
                fontWeight={500}
                mb={0.5}
                display="block"
              >
                Return
              </Typography>
              <DatePicker
                value={returnDate}
                onChange={(val) => setReturnDate(val)}
                slotProps={{
                  textField: {
                    variant: "outlined",
                    size: "small",
                    fullWidth: true,
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={2}>
              <Typography
                variant="caption"
                fontWeight={500}
                mb={0.5}
                display="block"
              >
                &nbsp;
              </Typography>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  height: 40,
                  fontSize: "0.875rem",
                  textTransform: "none",
                  borderRadius: 2,
                }}
                onClick={handleSearch}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </Paper>

        {imageUrl && !FlightCards && (
          <Paper
            elevation={0}
            sx={{
              mb: 4,
              borderRadius: 3,
              overflow: "hidden",
              maxHeight: "280px",
            }}
          >
            <img
              src={imageUrl}
              alt="Flight Destination"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </Paper>
        )}

        <Grid container spacing={3}>
          {FlightCards?.itineraries?.map((itinerary) => (
            <Grid item xs={12} md={6} lg={4} key={itinerary?.id}>
              <Paper
                elevation={2}
                sx={{
                  p: 2.5,
                  borderRadius: 3,
                  border: "1px solid #e0e0e0",
                  transition: "0.3s ease",
                  "&:hover": {
                    boxShadow: 4,
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {itinerary?.legs?.map((leg) => (
                  <Box key={leg?.id} mb={2}>
                    <Typography variant="subtitle1" fontWeight={600}>
                      {leg?.origin?.displayCode} →{" "}
                      {leg?.destination?.displayCode}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" mb={0.5}>
                      {leg.stopCount === 0
                        ? "Direct Flight"
                        : `${leg.stopCount} Stop(s)`}
                    </Typography>

                    <Typography variant="body2">
                      🕓 <strong>Departure:</strong>{" "}
                      {new Date(leg.departure).toLocaleString()}
                    </Typography>

                    <Typography variant="body2">
                      🕘 <strong>Arrival:</strong>{" "}
                      {new Date(leg.arrival).toLocaleString()}
                    </Typography>

                    <Box display="flex" alignItems="center" gap={1} mt={1}>
                      <Avatar
                        src={leg?.carriers?.marketing?.[0]?.logoUrl}
                        alt="Airline Logo"
                        sx={{ width: 32, height: 32 }}
                      />
                      <Typography variant="body2">
                        <strong>Airline:</strong>{" "}
                        {leg?.carriers?.marketing?.[0]?.name}
                      </Typography>
                    </Box>

                    <Typography variant="body2" mt={1}>
                      ⏱️ <strong>Duration:</strong> {leg?.durationInMinutes} min
                    </Typography>
                  </Box>
                ))}

                <Divider sx={{ my: 1.5 }} />
                <Box display="flex" gap={10}>
                  <Typography variant="h6" textAlign="left">
                    Ticket Price
                  </Typography>

                  <Typography variant="h6" color="primary" textAlign="right">
                    {itinerary?.price?.formatted}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </LocalizationProvider>
  );
}
