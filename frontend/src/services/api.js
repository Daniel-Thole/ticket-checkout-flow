import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000";

export const getEvents = async () => {
  const response = await axios.get(`${API_BASE_URL}/events/`);
  return response.data;
};

export const getEventDetails = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/events/${id}`);
  return response.data;
};

export const checkoutSeat = async (seatId) => {
  const response = await axios.post(`${API_BASE_URL}/checkout/${seatId}`);
  return response.data;
};
