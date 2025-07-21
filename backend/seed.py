from database import SessionLocal, engine, Base
from models import Event, Seat

Base.metadata.create_all(bind=engine)

db = SessionLocal()

# Sample events
event1 = Event(name="Rock Concert", date="2025-08-10", venue="O2 Arena")
event2 = Event(name="Jazz Night", date="2025-09-15", venue="Royal Albert Hall")

db.add_all([event1, event2])
db.commit()

# Sample seats
seats = [
    Seat(section="A", row="1", number=i, price=50.0, available=True, event_id=event1.id) for i in range(1, 11)
] + [
    Seat(section="B", row="1", number=i, price=40.0, available=True, event_id=event2.id) for i in range(1, 11)
]

db.add_all(seats)
db.commit()
db.close()
