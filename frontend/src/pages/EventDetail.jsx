import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const response = await fetch("http://127.0.0.1:8000/events");
const data = await response.json();

export default function EventDetail() {
  const { id } = useParams();
  const event = events.find(e => e.id === parseInt(id));
  const { setEventDetails } = useCart();

  const handleSelectEvent = () => setEventDetails(event);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{event.name}</h1>
      <p className="mt-2">{event.date} • {event.location}</p>
      <p className="mt-4 text-lg">Price: £{event.price}</p>
      <Link
        to={`/event/${event.id}/seats`}
        onClick={handleSelectEvent}
        className="inline-block mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Buy Tickets
      </Link>
    </div>
  );
}
