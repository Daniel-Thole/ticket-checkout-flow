import React, { useContext } from "react";
import { TicketContext } from "../context/TicketContext";

const SeatSelection = () => {
  const { selectedEvent, bookSeat } = useContext(TicketContext);

  if (!selectedEvent) return null;

  const handleBooking = async (seatId) => {
    const message = await bookSeat(seatId);
    alert(message);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{selectedEvent.name}</h2>
      <p>{selectedEvent.date} - {selectedEvent.venue}</p>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {selectedEvent.seats.map((seat) => (
          <button
            key={seat.id}
            className={`p-4 rounded-lg ${
              seat.available ? "bg-green-500" : "bg-gray-400"
            }`}
            onClick={() => handleBooking(seat.id)}
            disabled={!seat.available}
          >
            {seat.section}-{seat.row}{seat.number}<br />
            £{seat.price}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SeatSelection;
