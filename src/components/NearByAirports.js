import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";

export default function NearbyAirportsUI({ flightData }) {
  const currentAirport = flightData?.data?.current;
  const nearbyAirports = flightData?.data?.nearby || [];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 2, sm: 3 },
        maxWidth: "1200px",
        mx: "auto",
      }}
    >
      {/* 📍 Current Location Airport */}
      <Box mb={4}>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          fontWeight={600}
          gutterBottom
        >
          Your Nearest Airport
        </Typography>

        {currentAirport && (
          <Card
            component={Paper}
            elevation={3}
            sx={{
              background: "linear-gradient(90deg, #ffffff, #50acf8)",
              p: 2,
              borderRadius: 2,
              transition: "0.3s",
              overflow: "hidden",
            }}
          >
            <CardContent sx={{ p: 0 }}>
              <Typography variant="h6" color="primary">
                {currentAirport?.presentation?.title} (
                {currentAirport?.navigation?.relevantFlightParams?.skyId})
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 0.5 }}
              >
                Also known as: {currentAirport?.navigation?.localizedName}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 0.5 }}
              >
                City:{" "}
                {currentAirport?.navigation?.relevantHotelParams?.localizedName}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 0.5 }}
              >
                {currentAirport?.presentation?.subtitle}
              </Typography>
            </CardContent>
          </Card>
        )}
      </Box>

      {/* ✈️ Nearby Airports List */}
      <Box>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          fontWeight={600}
          gutterBottom
        >
          Nearby Airports
        </Typography>

        <Grid container spacing={2}>
          {nearbyAirports?.map((airport, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                elevation={2}
                sx={{
                  borderRadius: 2,
                  transition: "0.3s ease-in-out",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  "&:hover": {
                    boxShadow: 6,
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    gutterBottom
                  >
                    {airport?.presentation?.title} (
                    {airport?.navigation?.relevantFlightParams?.skyId})
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    Also known as: {airport?.navigation?.localizedName}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    City:{" "}
                    {airport?.navigation?.relevantHotelParams?.localizedName}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 0.5 }}
                  >
                    {airport?.presentation?.subtitle}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
