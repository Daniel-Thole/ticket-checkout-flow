import { Link } from "react-router-dom";

const events = [
  { id: 1, name: "Live Concert: The Weeknd", date: "Aug 15, 2025", location: "London Arena" },
  { id: 2, name: "DJ Night: Calvin Harris", date: "Aug 20, 2025", location: "Fabric Club" },
];

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Upcoming Events</h1>
      <div className="space-y-4">
        {events.map(event => (
          <div key={event.id} className="p-4 border rounded-lg shadow">
            <h2 className="text-xl font-semibold">{event.name}</h2>
            <p>{event.date} • {event.location}</p>
            <Link to={`/event/${event.id}`} className="text-blue-500 hover:underline">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
