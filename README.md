# Task Manager (Simple MEAN-like project)

This is a minimal Task Manager project built to showcase CRUD operations and a basic full-stack workflow.

## What is included
- `backend/` - Node.js + Express API using Mongoose (MongoDB).
- `frontend/` - Simple HTML/CSS/JS frontend that uses fetch() to call API.

## Quick setup

### 1) Backend
1. Go to `backend/`
2. Copy `.env.example` to `.env` and set `MONGO_URI` (use MongoDB Atlas or local MongoDB).
3. Install dependencies:
```bash
cd backend
npm install
```
4. Start server:
```bash
# for development with auto-reload (you may need nodemon installed)
npm run dev
# or
npm start
```
Server runs on `http://localhost:5000` by default.

### 2) Frontend
Open `frontend/index.html` in your browser (or serve it with a simple static server).  
The frontend expects the backend API at `http://localhost:5000/api/tasks`. If your backend runs on a different host/port, change `API_URL` in `frontend/index.html` or `frontend/app.js`.

### 3) Test endpoints with curl (examples)
```bash
# get tasks
curl http://localhost:5000/api/tasks

# create task
curl -X POST -H "Content-Type: application/json" -d '{"title":"test task"}' http://localhost:5000/api/tasks
```

## How to push to GitHub (one-time)
1. Initialize git:
```bash
git init
git add .
git commit -m "Initial commit: task manager"
```
2. Create a repository on GitHub (https://github.com/new) named `task-manager` (or your preferred name).
3. Add remote & push:
```bash
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

## Notes
- This repo is intentionally small and simple so you can explain every line in an interview.
- If you want to deploy, consider using MongoDB Atlas for `MONGO_URI` and platforms like Render/Heroku for the backend and GitHub Pages for the frontend.