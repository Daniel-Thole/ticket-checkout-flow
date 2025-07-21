from sqlalchemy import Column, Integer, String, Float, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from database import Base

class Event(Base):
    __tablename__ = "events"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    date = Column(String)
    venue = Column(String)

    seats = relationship("Seat", back_populates="event")

class Seat(Base):
    __tablename__ = "seats"

    id = Column(Integer, primary_key=True, index=True)
    section = Column(String)
    row = Column(String)
    number = Column(Integer)
    price = Column(Float)
    available = Column(Boolean, default=True)
    event_id = Column(Integer, ForeignKey("events.id"))

    event = relationship("Event", back_populates="seats")
