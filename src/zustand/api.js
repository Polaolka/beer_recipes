import axios from 'axios';

const API_URL = 'https://api.punkapi.com/v2/beers';

export const fetchBeers = async page => {
  try {
    const response = await axios.get(`${API_URL}?page=${page}&per_page=25`);
    return response.data;
  } catch (error) {
    console.error('Error fetching beers:', error);
    throw error;
  }
};

export const fetchOneBeer = async id => {
  try {
    const response = await axios.get(`${API_URL}/${id}`, {});
    return response.data;
  } catch (error) {
    console.error('Error fetching one beer:', error);
    throw error;
  }
};
