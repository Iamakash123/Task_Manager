Task Manager 🚀

A minimal Task Manager application demonstrating full-stack development using Node.js, Express, MongoDB, and vanilla JavaScript. Perfect for learning CRUD operations and showcasing full-stack skills.

Features

Backend: RESTful API with Node.js, Express, and MongoDB (via Mongoose)

Frontend: Lightweight HTML/CSS/JS interface using fetch()

CRUD Operations: Create, Read, Update, Delete tasks

Modular & Extendable: Easy to add authentication, due dates, or priorities

Tech Stack

Backend: Node.js, Express, MongoDB (Mongoose)

Frontend: HTML, CSS, JavaScript

Project Structure
Task_Manager/
│
├── backend/                 # Node.js + Express API
│   ├── models/              # Mongoose models
│   ├── routes/              # API routes
│   ├── .env.example         # Environment variables template
│   └── server.js            # Entry point
│
├── frontend/                # Static frontend
│   ├── index.html           # Main HTML page
│   ├── app.js               # JavaScript logic
│   └── style.css            # CSS styling
│
└── README.md                # Project documentation

Getting Started
Prerequisites

Node.js & npm

MongoDB (local or MongoDB Atlas
)

Backend Setup
cd backend
copy .env.example .env      # set MONGO_URI
npm install
npm run dev                 # start development server


Server runs on http://localhost:5000

Frontend Setup

Open frontend/index.html in a browser

Update API_URL in frontend/app.js if backend runs on a different host/port

What I Learned

Built a full-stack application with Node.js + Express + MongoDB

Implemented CRUD operations and REST API design

Connected frontend with backend using fetch()
