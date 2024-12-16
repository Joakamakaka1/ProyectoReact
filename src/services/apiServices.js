export const fetchAirlines = async () => {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/region/europe"
    );
    if (!response.ok) {
      throw new Error(`Error fetching airlines data: ${response.status}`);
    }
    const data = await response.json();
    return data.slice(0, 4); // Devuelve los primeros 4 paquetes
  } catch (error) {
    console.error("Error fetching airlines:", error);
    return [];
  }
};
