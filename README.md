# 💰 Finance Dashboard Backend (MERN Stack)

A **production-ready backend system** for a Finance Dashboard that supports user roles, financial record management, and analytics with secure APIs.

---

## 🚀 Features

### 🔐 Authentication & Authorization

* JWT-based authentication
* Role-Based Access Control (RBAC)

  * **Viewer** → Read-only access
  * **Analyst** → View + analytics access
  * **Admin** → Full control (CRUD + users)

---

### 💳 Financial Records Management

* Create, update, delete financial records
* Fields:

  * Amount
  * Type (Income / Expense)
  * Category
  * Date
  * Notes
* Filtering by type, category, date

---

### 📊 Dashboard Analytics

* Total Income
* Total Expenses
* Net Balance
* Category-wise aggregation
* Summary APIs using MongoDB Aggregation

---

### ⚡ Advanced Features

* ✅ Pagination
* ✅ Search API (category + notes)
* ✅ Soft Delete (`isDeleted`)
* ✅ Rate Limiting (API protection)
* ✅ Swagger API Documentation
* ✅ Unit Testing (Jest + Supertest)
* ✅ MongoDB Indexing (Performance Optimization)

---

## 🧱 Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Authentication:** JWT
* **Testing:** Jest + Supertest
* **Docs:** Swagger

---

## 📁 Project Structure

```
finance-dashboard/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── test/
├── utils/
│
├── server.js
├── app.js
├── package.json
└── .env
```

---

## ⚙️ Installation

### 1️⃣ Clone Repository

```
git clone https://github.com/vineetrajput09/finance_dashboard.git
cd finance-dashboard
```

---

### 2️⃣ Install Dependencies

```
npm install
```

---

### 3️⃣ Setup Environment Variables

Create `.env` file:

```
MONGO_URI=mongodb://127.0.0.1:27017/financeDB
JWT_SECRET=your_secret_key
PORT=5000
```

---

### 4️⃣ Run Server

```
nodemon server.js
```

Server runs on:

```
http://localhost:5000
```
Test:

```
npm test
```
---

## 📚 API Documentation (Swagger)

Access Swagger UI:

```
http://localhost:5000/api-docs
```

---

## 🔑 API Endpoints

### 🔐 Auth

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register user |
| POST   | /api/auth/login    | Login user    |

---

### 💳 Records

| Method | Endpoint         | Access    |
| ------ | ---------------- | --------- |
| GET    | /api/records     | All roles |
| POST   | /api/records     | Admin     |
| PUT    | /api/records/:id | Admin     |
| DELETE | /api/records/:id | Admin     |

---

### 📊 Dashboard

| Method | Endpoint               | Access        |
| ------ | ---------------------- | ------------- |
| GET    | /api/dashboard/summary | Analyst/Admin |

---

## 🔍 Query Parameters

### Pagination

```
GET /api/records?page=1&limit=10
```

### Search

```
GET /api/records?search=food
```

### Filters

```
GET /api/records?type=income&category=salary
```

---

## 🛡️ Security Features

* JWT Authentication
* Role-Based Access Control
* Rate Limiting (100 requests / 15 min)
* Input Validation
* Protected Routes

---

## 🧪 Testing

### Run Tests

```
npm test
```

### Testing Stack

* Jest
* Supertest
* MongoDB Memory Server

### Coverage Includes

* Auth APIs
* Record CRUD
* RBAC (Role-based testing)
* Dashboard APIs

---

## 🧹 Soft Delete

Instead of permanently deleting records:

```
isDeleted: true
```

Ensures:

* Data recovery possible
* Audit-friendly system

---

## 📈 Performance Optimizations

* MongoDB Indexing
* Pagination
* Efficient Aggregation Pipelines

---

## 🤝 Contributing

Contributions are welcome!

```
Fork → Create Branch → Commit → Push → Pull Request
```

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Vineet Rajput**

* 💼 MERN Stack Developer

