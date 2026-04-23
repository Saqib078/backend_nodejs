# 🛒 Shopify Backend Clone (Node.js)

A production-style backend inspired by Shopify, built with Node.js and Express. This project demonstrates scalable backend architecture with authentication, product management, and media handling.

---

## 🚀 Overview

This backend includes:

- Secure authentication using JWT  
- Middleware-based route protection  
- Modular and scalable folder structure  
- Image & file upload handling using ImageKit  
- RESTful API design  

---

## ✨ Features

- 🔐 JWT Authentication  
- 🛡️ Protected Routes (Middleware)  
- 👤 User Register/Login  
- 📦 Product CRUD Operations  
- 🖼️ Image Upload (ImageKit)  
- 🎵 Music/File Upload Support  
- ⚙️ Environment Config (.env)  
- 🧩 Clean Architecture  

---

## 🛠️ Tech Stack

- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- JWT (Authentication)  
- ImageKit (Media Upload)  
- dotenv  

---

## 📁 Project Structure

```
├── src
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── services
│   ├── utils
│   ├── db
│   └── app.js
│
├── server.js
├── package.json
├── .env
└── README.md
```

---

## ⚙️ Setup

### 1. Clone Repo

```bash
git clone https://github.com/your-username/shopify-backend-clone.git
cd shopify-backend-clone
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env`

```
PORT=3000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret

IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url_endpoint
```

---

## ⚙️ Run Server

```bash
npm run dev
```

or

```bash
node server.js
```

---

## 🔐 Authentication Flow

1. User logs in → receives JWT token  
2. Send token in headers:

```http
Authorization: Bearer <token>
```

3. Middleware verifies token for protected routes  

---

## 📡 API Routes

### 🔑 Auth

| Method | Endpoint              | Description        |
|--------|---------------------|--------------------|
| POST   | /api/auth/register  | Register user      |
| POST   | /api/auth/login     | Login & get token  |

---

### 📦 Products

| Method | Endpoint                  | Access      |
|--------|--------------------------|------------|
| GET    | /api/products            | Public     |
| POST   | /api/products            | Protected  |
| PUT    | /api/products/:id        | Protected  |
| DELETE | /api/products/:id        | Protected  |

---

### 📤 Upload

| Method | Endpoint                | Description        |
|--------|------------------------|--------------------|
| POST   | /api/upload/image      | Upload image       |
| POST   | /api/upload/music      | Upload music file  |

---

## 🛡️ Protected Routes

Routes marked as **Protected** require a valid JWT token.

---

## 🧠 Middleware

Handles:

- Auth verification  
- Route protection  
- Error handling  

Example:

```js
app.use("/api/products", authMiddleware);
```

---

## 🖼️ ImageKit

- Upload images/files  
- Returns CDN URLs  
- Used in product media  

---

## 🔮 Future Improvements

- Orders System  
- Payment Integration  
- Admin APIs  
- Reviews & Ratings  
- Inventory Management  

---

## 📄 License

MIT License  

---

## ⚠️ Note

This project is for learning/demo purposes and is not production-ready.
