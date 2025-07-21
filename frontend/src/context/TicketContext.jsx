import React, { createContext, useState, useEffect } from "react";
import { getEvents, getEventDetails, checkoutSeat } from "../services/api";

export const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch all events on load
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const data = await getEvents();
        setEvents(data);
      } catch (err) {
        setError("Failed to load events");
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const selectEvent = async (eventId) => {
    setLoading(true);
    try {
      const data = await getEventDetails(eventId);
      setSelectedEvent(data);
    } catch (err) {
      setError("Failed to load event details");
    } finally {
      setLoading(false);
    }
  };

  const bookSeat = async (seatId) => {
    try {
      const result = await checkoutSeat(seatId);
      // Update seat availability in UI
      if (selectedEvent) {
        const updatedSeats = selectedEvent.seats.map((seat) =>
          seat.id === seatId ? { ...seat, available: false } : seat
        );
        setSelectedEvent({ ...selectedEvent, seats: updatedSeats });
      }
      return result.message || result.error;
    } catch (err) {
      return "Booking failed";
    }
  };

  return (
    <TicketContext.Provider
      value={{
        events,
        selectedEvent,
        loading,
        error,
        selectEvent,
        bookSeat,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};
