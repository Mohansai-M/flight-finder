import axios from "axios";

export default async function NearbyAirports(longitude,latitude) {

  const options = {
    method: "GET",
    url: "https://sky-scrapper.p.rapidapi.com/api/v1/flights/getNearByAirports",
    params: {
      lat: latitude,
      lng: longitude,
      locale: "en-US",
    },
    headers: {
      "x-rapidapi-key":  process.env.REACT_APP_RAPIDAPI_KEY,
      "x-rapidapi-host": process.env.REACT_APP_RAPIDAPI_HOST,
    },
  };
  
  try {
  //  const response = await axios.request(options);
  const response = {
    status: true,
    timestamp: 1751065709893,
    data: {
      current: {
        skyId: "BOM",
        entityId: "95673320",
        presentation: {
          title: "Mumbai",
          suggestionTitle: "Mumbai (BOM)",
          subtitle: "India",
        },
        navigation: {
          entityId: "95673320",
          entityType: "AIRPORT",
          localizedName: "Mumbai",
          relevantFlightParams: {
            skyId: "BOM",
            entityId: "95673320",
            flightPlaceType: "AIRPORT",
            localizedName: "Mumbai",
          },
          relevantHotelParams: {
            entityId: "27539520",
            entityType: "CITY",
            localizedName: "Mumbai",
          },
        },
      },
      nearby: [
        {
          presentation: {
            title: "Pune",
            suggestionTitle: "Pune (PNQ)",
            subtitle: "India",
          },
          navigation: {
            entityId: "128668941",
            entityType: "AIRPORT",
            localizedName: "Pune",
            relevantFlightParams: {
              skyId: "PNQ",
              entityId: "128668941",
              flightPlaceType: "AIRPORT",
              localizedName: "Pune",
            },
            relevantHotelParams: {
              entityId: "81977372",
              entityType: "CITY",
              localizedName: "Pune",
            },
          },
        },
        {
          presentation: {
            title: "Indira Gandhi International ",
            suggestionTitle: "Indira Gandhi International  (DEL)",
            subtitle: "India",
          },
          navigation: {
            entityId: "95673498",
            entityType: "AIRPORT",
            localizedName: "Indira Gandhi International ",
            relevantFlightParams: {
              skyId: "DEL",
              entityId: "95673498",
              flightPlaceType: "AIRPORT",
              localizedName: "Indira Gandhi International ",
            },
            relevantHotelParams: {
              entityId: "27540706",
              entityType: "CITY",
              localizedName: "New Delhi",
            },
          },
        },
        {
          presentation: {
            title: "Bengaluru",
            suggestionTitle: "Bengaluru (BLR)",
            subtitle: "India",
          },
          navigation: {
            entityId: "95673351",
            entityType: "AIRPORT",
            localizedName: "Bengaluru",
            relevantFlightParams: {
              skyId: "BLR",
              entityId: "95673351",
              flightPlaceType: "AIRPORT",
              localizedName: "Bengaluru",
            },
            relevantHotelParams: {
              entityId: "27539471",
              entityType: "CITY",
              localizedName: "Bengaluru",
            },
          },
        },
        {
          presentation: {
            title: "Ahmedabad",
            suggestionTitle: "Ahmedabad (AMD)",
            subtitle: "India",
          },
          navigation: {
            entityId: "95673366",
            entityType: "AIRPORT",
            localizedName: "Ahmedabad",
            relevantFlightParams: {
              skyId: "AMD",
              entityId: "95673366",
              flightPlaceType: "AIRPORT",
              localizedName: "Ahmedabad",
            },
            relevantHotelParams: {
              entityId: "27536554",
              entityType: "CITY",
              localizedName: "Ahmedabad",
            },
          },
        },
        {
          presentation: {
            title: "Hyderabad",
            suggestionTitle: "Hyderabad (HYD)",
            subtitle: "India",
          },
          navigation: {
            entityId: "128668073",
            entityType: "AIRPORT",
            localizedName: "Hyderabad",
            relevantFlightParams: {
              skyId: "HYD",
              entityId: "128668073",
              flightPlaceType: "AIRPORT",
              localizedName: "Hyderabad",
            },
            relevantHotelParams: {
              entityId: "27542764",
              entityType: "CITY",
              localizedName: "Hyderabad",
            },
          },
        },
        {
          presentation: {
            title: "Chennai",
            suggestionTitle: "Chennai (MAA)",
            subtitle: "India",
          },
          navigation: {
            entityId: "95673361",
            entityType: "AIRPORT",
            localizedName: "Chennai",
            relevantFlightParams: {
              skyId: "MAA",
              entityId: "95673361",
              flightPlaceType: "AIRPORT",
              localizedName: "Chennai",
            },
            relevantHotelParams: {
              entityId: "32575954",
              entityType: "CITY",
              localizedName: "Chennai",
            },
          },
        },
        {
          presentation: {
            title: "Dubai",
            suggestionTitle: "Dubai (DXB)",
            subtitle: "United Arab Emirates",
          },
          navigation: {
            entityId: "95673506",
            entityType: "AIRPORT",
            localizedName: "Dubai",
            relevantFlightParams: {
              skyId: "DXB",
              entityId: "95673506",
              flightPlaceType: "AIRPORT",
              localizedName: "Dubai",
            },
            relevantHotelParams: {
              entityId: "27540839",
              entityType: "CITY",
              localizedName: "Dubai",
            },
          },
        },
      ],
      recent: [],
    },
  };
    return response;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}
