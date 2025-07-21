from pydantic import BaseModel
from typing import List

class SeatBase(BaseModel):
    id: int
    section: str
    row: str
    number: int
    price: float
    available: bool

    class Config:
        orm_mode = True

class EventBase(BaseModel):
    id: int
    name: str
    date: str
    venue: str
    seats: List[SeatBase] = []

    class Config:
        orm_mode = True
