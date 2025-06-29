import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { useNavigate } from "react-router-dom";
import { fetchAirports } from "./FlightSuggestions";

export default function LandingSearchBar() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departDate, setDepartDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);
  const [selectedFromEntityId, setselectedFromEntityId] = useState(null);
  const [selectedToEntityId, setSelectedToEntityId] = useState(null);
  const [selectedFromSkyId, setSelectedFromSkyId] = useState(null);
  const [selectedToSkyId, setSelectedToSkyId] = useState(null);
    

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  
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
  const params = new URLSearchParams({
    fromSkyId: selectedFromSkyId,
    toSkyId: selectedToSkyId,
    departDate: formatDate(departDate),
    fromEntityId: selectedFromEntityId,
    toEntityId: selectedToEntityId,
  });
     
    navigate(`/flights?${params.toString()}`);
  };


  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          flexWrap: "nowrap",
          justifyContent: "center",
          alignItems: "stretch",
          gap: 0.5,
          px: 2,
          maxWidth: "1200px",
          mx: "auto",
          mt: 3,
        }}
      >
        {/* From */}
        <Paper
          elevation={3}
          sx={{ p: 2, flex: 1, minWidth: 200, borderRadius: 3 }}
        >
          <Typography fontSize={13} fontWeight={600} mb={0.5}>
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
        </Paper>
        {/* To */}
        <Paper
          elevation={3}
          sx={{ p: 2, flex: 1, minWidth: 200, borderRadius: 3 }}
        >
          <Typography fontSize={13} fontWeight={600} mb={0.5}>
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
        </Paper>

        {/* Depart */}
        <Paper
          elevation={3}
          sx={{ p: 2, flex: 1, minWidth: 200, borderRadius: 3 }}
        >
          <Typography fontSize={13} fontWeight={600} mb={0.5}>
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
                InputProps: {
                  style: { height: 36, fontSize: 13 },
                },
                inputProps: {
                  style: { padding: "6px 10px" },
                },
              },
            }}
          />
        </Paper>

        {/* Return */}
        <Paper
          elevation={3}
          sx={{ p: 2, flex: 1, minWidth: 200, borderRadius: 3 }}
        >
          <Typography fontSize={13} fontWeight={600} mb={0.5}>
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
                InputProps: {
                  style: { height: 36, fontSize: 13 },
                },
                inputProps: {
                  style: { padding: "6px 10px" },
                },
              },
            }}
          />
        </Paper>

        {/* Search Button */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: 200,
            width: isMobile ? "100%" : "auto",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSearch}
            sx={{
              height: 56,
              px: 4,
              borderRadius: 2,
              textTransform: "none",
              whiteSpace: "nowrap",
              width: "100%",
            }}
          >
            Search
          </Button>
        </Box>
      </Box>
    </LocalizationProvider>
  );
}
