import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const seats = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  taken: Math.random() > 0.7,
}));

export default function SeatSelection() {
  const { selectedSeats, addSeat, removeSeat } = useCart();

  const handleSeatClick = (seat) => {
    if (seat.taken) return;
    if (selectedSeats.find(s => s.id === seat.id)) {
      removeSeat(seat);
    } else {
      addSeat(seat);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Select Your Seats</h1>
      <div className="grid grid-cols-6 gap-2 mb-6">
        {seats.map(seat => {
          const isSelected = selectedSeats.some(s => s.id === seat.id);
          return (
            <button
              key={seat.id}
              onClick={() => handleSeatClick(seat)}
              className={`p-2 rounded text-white ${seat.taken ? "bg-gray-400" : isSelected ? "bg-blue-500" : "bg-green-500"}`}
              disabled={seat.taken}
            >
              {seat.id}
            </button>
          );
        })}
      </div>
      {selectedSeats.length > 0 && (
        <Link to="/checkout" className="bg-blue-600 text-white px-4 py-2 rounded">
          Proceed to Checkout
        </Link>
      )}
    </div>
  );
}
