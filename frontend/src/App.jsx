import React from "react";
import EventList from "./components/EventList";
import SeatSelection from "./components/SeatSelection";

const App = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Ticket Checkout Flow</h1>
      <EventList />
      <SeatSelection />
    </div>
  );
};

export default App;
