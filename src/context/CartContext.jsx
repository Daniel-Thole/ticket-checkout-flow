import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [eventDetails, setEventDetails] = useState(null);

  const addSeat = (seat) => {
    setSelectedSeats([...selectedSeats, seat]);
  };

  const removeSeat = (seat) => {
    setSelectedSeats(selectedSeats.filter(s => s.id !== seat.id));
  };

  const clearCart = () => setSelectedSeats([]);

  return (
    <CartContext.Provider value={{
      selectedSeats, addSeat, removeSeat, clearCart,
      eventDetails, setEventDetails
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
