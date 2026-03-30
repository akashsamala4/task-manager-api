# 🚀 Task Management API

A robust **Task Management REST API** built using **Node.js, Express, and MongoDB**.
This project allows users to register, login, and manage their daily tasks efficiently with full CRUD operations.

---

## 📌 Features

* 🔐 User Authentication (Register & Login)
* 📝 Create, Read, Update, Delete Tasks
* 📊 Pagination, Filtering & Sorting
* 🗂️ Task Categories & Priority Levels
* ✅ Data Validation using Mongoose
* 🔗 MongoDB Atlas Integration

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Atlas)
* **ODM:** Mongoose
* **Authentication:** JWT (JSON Web Token)

---

## 📂 Project Structure

```
task-manager-api/
│── server.js
│── package.json
│── .env.example
│── README.md
│
└── src/
    ├── config/
    │   └── database.js
    ├── models/
    │   ├── User.js
    │   └── Task.js
    ├── controllers/
    │   ├── userController.js
    │   └── taskController.js
    ├── middleware/
    │   └── auth.js
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```
git clone https://github.com/yourusername/task-manager-api.git
cd task-manager-api
```

---

### 2️⃣ Install Dependencies

```
npm install
```

---

### 3️⃣ Configure Environment Variables

Create a `.env` file in root:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### 4️⃣ Run the Server

```
npm start
```

Server will run on:

```
http://localhost:5000
```

---

## 📡 API Endpoints

### 🔐 Authentication

* **POST** `/api/auth/register` → Register User
* **POST** `/api/auth/login` → Login User

---

### 📋 Tasks

* **POST** `/api/tasks` → Create Task
* **GET** `/api/tasks` → Get All Tasks
* **PUT** `/api/tasks/:id` → Update Task
* **DELETE** `/api/tasks/:id` → Delete Task

---

## 🧪 Sample Request (Create Task)

```
POST /api/tasks
```

```
{
  "title": "Complete Internship Task",
  "priority": "high",
  "category": "work"
}
```

---

## 📊 Database Schema

### 🧑 User

* name
* email
* password

### 📌 Task

* title
* description
* completed
* priority
* dueDate
* category
* user (reference)

---

## 📸 Screenshots

*Add your project screenshots here*

---

## 🚀 Deployment

You can deploy this project on:

* Render
* Railway
* Vercel (backend with serverless)

---

## 📖 Future Improvements

* 🔔 Notifications
* 📱 Frontend Integration (React)
* 📈 Analytics Dashboard

---

## 👨‍💻 Author

**Akash**

---

## ⭐ Show Your Support

If you like this project, give it a ⭐ on GitHub!
