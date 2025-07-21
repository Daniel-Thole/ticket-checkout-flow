from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
from models import Event
from schemas import EventBase
from typing import List

router = APIRouter(prefix="/events", tags=["Events"])

@router.get("/", response_model=List[EventBase])
def get_events(db: Session = Depends(get_db)):
    return db.query(Event).all()

@router.get("/{event_id}", response_model=EventBase)
def get_event(event_id: int, db: Session = Depends(get_db)):
    return db.query(Event).filter(Event.id == event_id).first()
