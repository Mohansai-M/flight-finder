import { Box, Typography, Paper, Avatar, IconButton } from "@mui/material";
import FlightIcon from "@mui/icons-material/Flight";
import PublicIcon from "@mui/icons-material/Public";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MapIcon from "@mui/icons-material/Map";

const AirportTile = ({ title, skyId, subtitle, entityType, localizedName }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 4,
        backgroundColor: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(10px)",
        border: "1px solid #e0e0e0",
        transition: "0.3s",
        "&:hover": {
          boxShadow: 6,
          transform: "translateY(-4px)",
        },
      }}
    >
      {/* Header: Icon + Title */}
      <Box display="flex" alignItems="center" gap={1} mb={2}>
        <Avatar sx={{ bgcolor: "primary.main" }}>
          <FlightIcon fontSize="small" />
        </Avatar>
        <Typography variant="h6" fontWeight="600">
          {title} <Typography component="span">({skyId})</Typography>
        </Typography>
      </Box>

      {/* Subtitle */}
      <Typography variant="body2" color="text.secondary" mb={2}>
        {subtitle || "No country info"}
      </Typography>

      {/* Metadata */}
      <Box display="flex" alignItems="center" gap={1} mb={1}>
        <PublicIcon fontSize="small" color="action" />
        <Typography variant="body2">{entityType}</Typography>
      </Box>

      <Box display="flex" alignItems="center" gap={1}>
        <LocationOnIcon fontSize="small" color="action" />
        <Typography variant="body2">{localizedName}</Typography>
      </Box>

      {/* Footer Icon */}
      <Box mt={3} display="flex" justifyContent="flex-end">
        <IconButton title="View on Map">
          <MapIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default AirportTile;
