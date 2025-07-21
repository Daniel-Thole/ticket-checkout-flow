import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { selectedSeats, eventDetails, clearCart } = useCart();
  const navigate = useNavigate();

  const total = selectedSeats.length * (eventDetails?.price || 0);

  const handlePayment = () => {
    clearCart();
    navigate("/confirmation");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Checkout</h1>
      <p>Event: {eventDetails?.name}</p>
      <p>Seats: {selectedSeats.map(s => s.id).join(", ")}</p>
      <p>Total: £{total}</p>
      <button
        onClick={handlePayment}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
      >
        Pay Now
      </button>
    </div>
  );
}
