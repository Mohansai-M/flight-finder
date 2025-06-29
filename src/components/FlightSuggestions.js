import SearchAirports from "../api/searchAirport";

export   const filterAirports = (responseData, query) => {
  if (!query) return [];
  const lowerQuery = query.toLowerCase();

  return responseData
    .filter((item) => {
      console.log(item?.navigation?.relevantFlightParams?.skyId);
      const title = item.presentation?.title?.toLowerCase() || "";
      const subtitle = item.presentation?.subtitle?.toLowerCase() || "";
      const suggestionTitle =
        item.presentation?.suggestionTitle?.toLowerCase() || "";
      return (
        title.includes(lowerQuery) ||
        subtitle.includes(lowerQuery) ||
        suggestionTitle.includes(lowerQuery)
      );
    })
    .map((item) => ({
      name:
        item.presentation?.suggestionTitle ||
        item.presentation?.title ||
        item?.navigation?.relevantFlightParams?.skyId ||
        item?.navigation?.relevantFlightParams?.localizedName,
      skyId: item.navigation?.relevantFlightParams?.skyId,
      entityId: item?.navigation?.relevantFlightParams?.entityId,
    }));
};

export const fetchAirports = async (query) => {
  if (!query || query.length < 2) return [];

  try {
    const airportsLocal = await SearchAirports(query);
    return filterAirports(airportsLocal?.data, query);
  } catch (err) {
    console.error("Airport fetch error", err);
    return [];
  }
};