🧩 React + Express Basic CRUD App
A simple full-stack CRUD application built using:

React (Frontend)
Express.js + MongoDB (Backend & Database)
Modern UI Design with minimal clean CSS

✨ Features
✅ Create User
✅ Read All Users
✅ View Single User Details
✅ Update User
✅ Delete User
✅ Responsive & clean UI using custom CSS

📁 Project Structure
bash
Copy
Edit
root/
├── backend/               # Express API
│   ├── routes/            # API route files
│   ├── controllers/       # Logic handlers
│   ├── models/            # Mongoose models
│   └── server.js          # Main Express server
├── frontend/              # React app
│   ├── src/
│   │   ├── components/    # User CRUD components
│   │   ├── App.js
│   │   └── main.css
├── .env
├── package.json


🚀 Getting Started
1. Clone the repo
git clone https://github.com/your-username/crud-app.git

cd crud-app


⚙️ Backend Setup (Express + MongoDB)
cd backend
npm install
Create a .env file in backend/:

env
PORT=8000
MONGODB_URI=mongodb:
Run the server:

node server.js
💻 Frontend Setup (React)

cd ../frontend
npm install
npm start
It will open in:
📍 http://localhost:3000

🧪 API Endpoints
Method	Endpoint	Description
GET	/api/getAllUsers	Get all users
GET	/api/user/:id	Get user by ID
POST	/api/user/	Create a new user
PUT	/api/user/:id	Update user by ID
DELETE	/api/user/:id	Delete user by ID



🛠️ Tools & Tech Used
React (hooks, router)

Express.js

MongoDB + Mongoose

Node.js

Vanilla CSS (custom)

📜 License
MIT © [Fahim]
Feel free to fork, modify, and use this project.
