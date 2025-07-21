import React, { useContext } from "react";
import { TicketContext } from "../context/TicketContext";

const EventList = () => {
  const { events, loading, error, selectEvent } = useContext(TicketContext);

  if (loading) return <p>Loading events...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Available Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id} className="border p-4 mb-2 rounded-lg shadow">
            <h3 className="text-xl">{event.name}</h3>
            <p>{event.date} - {event.venue}</p>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded mt-2"
              onClick={() => selectEvent(event.id)}
            >
              View Seats
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
