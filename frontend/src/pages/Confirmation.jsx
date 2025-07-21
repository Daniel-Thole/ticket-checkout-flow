export default function Confirmation() {
    const bookingId = Math.random().toString(36).substring(7).toUpperCase();
    return (
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Booking Confirmed!</h1>
        <p>Your Booking ID: <strong>{bookingId}</strong></p>
        <p className="mt-2">Enjoy the show!</p>
      </div>
    );
  }
  