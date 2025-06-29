import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Avatar,
  Divider,
  Chip,
  Button,
  Paper,
} from "@mui/material";
import FlightDetails from "../api/getFlightDetails";

export default function FlightDetailsCard(data) {
    const [flightDetails, setFlightDetails] = useState([]);
  useEffect(() => {

      const fetchData = async () => {
        try {
          const flightDetailsLocal = await FlightDetails();
          setFlightDetails(flightDetailsLocal);
        } catch (err) {
         console.log("Error fetching data in useEffect:", err);
        }
      };
  
      fetchData();
    }, []);
  

  const leg = flightDetails?.itinerary?.legs?.[0];
  const pricingOptions = flightDetails?.itinerary?.pricingOptions || [];

  if (!leg || pricingOptions.length === 0)
    return <Typography>No data available</Typography>;

  return (
    <Box sx={{ px: 2, py: 3, maxWidth: "1200px", mx: "auto" }}>
      <Typography variant="h4" gutterBottom fontWeight={600}>
        Flight Itinerary Details
      </Typography>

      {/* Main Itinerary Card */}
      <Card
        component={Paper}
        elevation={2}
        sx={{
          p: { xs: 2, md: 3 },
          borderRadius: 4,
          mb: 4,
          backgroundColor: "#fafafa",
          border: "1px solid #e0e0e0",
        }}
      >
        <CardContent sx={{ p: 0 }}>
          <Typography
            variant="h6"
            color="primary"
            fontWeight={600}
            gutterBottom
          >
            {leg?.origin?.name} ({leg?.origin?.displayCode}) →{" "}
            {leg?.destination?.name} ({leg?.destination?.displayCode})
          </Typography>

          <Typography variant="body2" gutterBottom>
            ✈️ <strong>Flight Number:</strong>{" "}
            {leg?.segments?.[0]?.flightNumber}
          </Typography>

          <Typography variant="body2" gutterBottom>
            🕓 <strong>Departure:</strong>{" "}
            {new Date(leg?.departure).toLocaleString()}
          </Typography>

          <Typography variant="body2" gutterBottom>
            🕘 <strong>Arrival:</strong>{" "}
            {new Date(leg?.arrival).toLocaleString()}
          </Typography>

          <Typography variant="body2" gutterBottom>
            ⏱️ <strong>Duration:</strong> {Math.floor(leg?.duration / 60)}h{" "}
            {leg?.duration % 60}m
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Box display="flex" alignItems="center" gap={2} flexWrap="wrap">
            <Avatar
              alt={leg?.segments?.[0]?.marketingCarrier?.name}
              src={leg?.segments?.[0]?.marketingCarrier?.logo}
              sx={{ width: 56, height: 56 }}
            />
            <Typography variant="body2" color="text.secondary">
              Operated by:{" "}
              <strong>{leg?.segments?.[0]?.operatingCarrier?.name}</strong>
            </Typography>
          </Box>
        </CardContent>
      </Card>

      <Typography variant="h5" gutterBottom fontWeight={600}>
        Booking Options
      </Typography>

      <Grid container spacing={3}>
        {pricingOptions.map((option, index) => (
          <Grid item xs={12} sm={12} md={6} lg={4} key={index}>
            <Card
              component={Paper}
              elevation={2}
              sx={{
                borderRadius: 4,
                border: "1px solid #e0e0e0",
                backgroundColor: "#ffffff",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "box-shadow 0.3s ease",
                "&:hover": {
                  boxShadow: 6,
                },
              }}
            >
              <CardContent>
                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                  {option?.agents?.[0]?.name}
                </Typography>

                <Typography variant="body2" mb={0.5}>
                  💰 Price: <strong>${option?.totalPrice}</strong>
                </Typography>

                <Typography variant="body2" mb={0.5}>
                  ⭐ Rating: {option?.agents?.[0]?.rating?.value} (
                  {option?.agents?.[0]?.rating?.count} reviews)
                </Typography>

                <Chip
                  label={`Updated: ${option?.agents?.[0]?.quoteAge} mins ago`}
                  size="small"
                  color="default"
                  sx={{ mt: 1 }}
                />

                <Button
                  variant="contained"
                  color="primary"
                  href={option?.agents?.[0]?.url}
                  target="_blank"
                  fullWidth
                  sx={{
                    mt: 2,
                    borderRadius: 2,
                    textTransform: "none",
                    py: 1,
                    fontWeight: 500,
                  }}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
