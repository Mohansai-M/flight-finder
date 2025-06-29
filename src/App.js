import { useEffect, useState } from "react";
import FlightsPlaceholder from "./assests/FlightsPlaceholder.jpg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NearbyAirports from "./api/getNearbyAirports";
import NearbyAirportsUI from "./components/NearByAirports";
import FlightCard from "./components/FlightCard";
import AirportCard from "./components/AirportCard";
import FlightDetailsCard from "./components/FlightDetailsCard";
import FlightPrices from "./components/FlightPrices";
import FlightHome from "./components/FlightHome";
import NavBar from "./components/NavBar";

function App() {
  const [flightData, setFlightData] = useState([]);
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const [orignID, setOriginID] = useState("");
  const [destID, setDesID] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
  }, []);

  useEffect(() => {
    if (!latitude || !longitude) return;

    const fetchData = async () => {
      try {
        const nearbyData = await NearbyAirports(longitude, latitude);
        setFlightData(nearbyData);
      } catch (err) {
       console.log("Error fetching data in useEffect:", err);
      }
    };

    fetchData();
  }, [latitude, longitude]);

 console.log(orignID)
  return (
    <Router>
      <NavBar transparent={true} />
      <div>
        <Routes>
          <Route path="/nearby" element={<NearbyAirportsUI flightData={flightData} />} />
          <Route path="/airports" element={ <AirportCard ImgData={FlightsPlaceholder} /> }/>
          <Route path="/flights" element={<FlightCard OnOriginIdChange={setOriginID} OnDestinicationChange={setDesID}/>} />
          <Route path="/details" element={<FlightDetailsCard />} />
          <Route path="/flight_price" element={<FlightPrices neworignID={orignID} newdestID={destID} />} />
          <Route path="/" element={<FlightHome ImgData={FlightsPlaceholder} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
