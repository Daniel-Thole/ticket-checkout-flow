from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import Base, engine
from routers import events, checkout

# Create tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Ticket Checkout API")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change to your frontend domain in prod
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes
app.include_router(events.router)
app.include_router(checkout.router)

@app.get("/")
def root():
    return {"message": "API is running"}
