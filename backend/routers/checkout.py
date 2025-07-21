from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
from models import Seat

router = APIRouter(prefix="/checkout", tags=["Checkout"])

@router.post("/{seat_id}")
def checkout(seat_id: int, db: Session = Depends(get_db)):
    seat = db.query(Seat).filter(Seat.id == seat_id, Seat.available == True).first()
    if seat:
        seat.available = False
        db.commit()
        return {"message": f"Seat {seat_id} successfully booked!"}
    return {"error": "Seat not available or doesn't exist"}
