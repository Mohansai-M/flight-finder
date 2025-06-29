import { Box, Grid, Typography, Tooltip, Divider, Paper } from "@mui/material";
import { format, parseISO, compareDesc } from "date-fns";
import { useEffect, useState } from "react";
import PriceCalender from "../api/getPriceCalender";

export default function FlightPrices(props) {

  console.log(props);
  const [flightPrice, setFlightPrice] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const priceLocal = await PriceCalender(props?.neworignID, props?.newdestID);
        setFlightPrice(priceLocal);
      } catch (err) {
        alert("Error fetching data in useEffect:", err);
      }
    };
    fetchData()
  },[]);

  const days = flightPrice?.flights?.days || [];

  // Sort days by descending date
  const sortedDays = [...days].sort((a, b) =>
    compareDesc(parseISO(a.day), parseISO(b.day))
  );

  // Grouping days by month using a simple loop
  const groupedByMonth = {};
  for (const item of sortedDays) {
    const date = parseISO(item.day);
    const monthName = format(date, "MMMM yyyy");
    if (!groupedByMonth[monthName]) {
      groupedByMonth[monthName] = [];
    }
    groupedByMonth[monthName].push(item);
  }

  const groupColor = {
    low: "#C8E6C9",
    medium: "#FFE0B2",
    high: "#FFCDD2",
  };

  const groupTextColor = {
    low: "#2e7d32",
    medium: "#ef6c00",
    high: "#c62828",
  };

  return (
    <Box px={2} py={3}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Flight Price Calendar
      </Typography>
      <br />
      <Typography variant="h6" fontWeight={600} gutterBottom>
        { (props?.neworignID && props?.newdestID ) && `${props?.neworignID} → ${props?.newdestID}` }
      </Typography>

      {(props?.neworignID && props?.newdestID ) ? Object.keys(groupedByMonth).map((month) => (
        <Box key={month} mb={5}>
          <Typography variant="h6" fontWeight={500} gutterBottom>
            {month}
          </Typography>

          <Grid container spacing={1}>
            {groupedByMonth[month].map(({ day, group, price }) => (
              <Grid item key={day}>
                <Tooltip title={`$${price} – ${group.toUpperCase()} fare`}>
                  <Paper
                    elevation={2}
                    sx={{
                      width: 90,
                      height: 90,
                      bgcolor: groupColor[group] || "#e0e0e0",
                      color: groupTextColor[group] || "#333",
                      borderRadius: 2,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      px: 1,
                      py: 1,
                      fontWeight: 500,
                    }}
                  >
                    <Typography variant="body2" fontWeight={600}>
                      {format(parseISO(day), "dd MMM")}
                    </Typography>
                    <Typography variant="caption" fontWeight={600}>
                      ${price}
                    </Typography>
                  </Paper>
                </Tooltip>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ mt: 4 }} />
        </Box>
      )) : 
      <div style={{ padding: "1rem", fontSize: "1rem", color: "#555" }}>
      No price data available. Please search for flights in the <strong>Search Flights</strong> section and return here to view the price calendar.
       </div> }
    </Box>
  );
}
