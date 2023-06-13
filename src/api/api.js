import axios from "axios";

const API_URL = "https://api.mercadolibre.com";

export const searchItems = async (query) => {
  try {
    const response = await axios.get(`${API_URL}/sites/MLA/search`, {
      params: {
        q: query,
        limit: 4,
      },
    });
    return response?.data?.results;
  } catch (error) {
    console.error("Error al obtener los resultados de búsqueda:", error);
    throw error;
  }
};

export const getItemDetails = async (itemId) => {
  try {
    const response = await axios.get(`${API_URL}/items/${itemId}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener la descripción del artículo:", error);
    throw error;
  }
};
export const getItemDescription = async (itemId) => {
  try {
    const response = await axios.get(`${API_URL}/items/${itemId}/description`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener la descripción del artículo:", error);
    throw error;
  }
};

export default { searchItems, getItemDescription, getItemDetails };
