🚀 Expense Tracker Backend API

A production-ready RESTful API for managing daily expenses, built using Node.js, Express, and MongoDB Atlas and deployed on Render.

🌐 Live API

🔗 https://expense-tracker-backened.onrender.com

📌 Features

✅ Add new expenses
✅ Get all expenses
✅ Update expenses
✅ Delete expenses
✅ MongoDB Atlas cloud database
✅ MVC folder structure
✅ Environment variable security
✅ Production deployment

🛠️ Tech Stack

Node.js

Express.js

MongoDB Atlas

Mongoose

dotenv

CORS

Render (Deployment)

Postman (API testing)

📂 Project Structure
expense-tracker-backend
│── config
│   └── db.js
│── models
│   └── Expense.js
│── routes
│   └── expenseRoutes.js
│── .env
│── .gitignore
│── index.js
│── package.json
⚙️ Environment Variables

Create a .env file in the root:

MONGO_URI=your_mongodb_connection_string
PORT=5000
▶️ Run Locally
npm install
npm run dev
📬 API Endpoints
Base URL
http://localhost:5000/api/expenses
Routes
Method	Endpoint	Description
GET	/api/expenses	Get all expenses
POST	/api/expenses	Add new expense
PUT	/api/expenses/:id	Update expense
DELETE	/api/expenses/:id	Delete expense
🧪 Testing

Tested using Postman for all CRUD operations.

☁️ Deployment

Deployed on Render with MongoDB Atlas cloud database.

🔐 Security

Environment variables are used to protect sensitive data

.env is added to .gitignore

👨‍💻 Author

Harsh Yadav
