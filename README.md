# 🛍️ ShopEase - Full Stack E-Commerce Web Application

ShopEase is a full-stack e-commerce web application developed using React.js, Node.js, Express.js, and MongoDB. It provides a complete online shopping experience for customers and a dedicated admin panel for managing products, users, orders, and sales statistics.

## 🌐 Project Links

Live Website: https://ecommerce-web-delta-fawn.vercel.app

Backend API: https://ecommerce-web-production-a568.up.railway.app

API Base URL: https://ecommerce-web-production-a568.up.railway.app/api

GitHub Repository: https://github.com/pathumnimsara/ecommerce-web

## ✨ Features

### Customer Features
- User Registration and Login
- JWT Authentication
- Browse Products
- View Product Details
- Add Products to Cart
- Update Cart Quantity
- Remove Products from Cart
- View Cart Total
- Checkout
- Customer Information
- Address and Contact Details
- Multiple Payment Methods
- Place Orders
- Order Confirmation

### Admin Features
- Admin Authentication
- Dashboard Statistics
- Product Management
- Add Products
- Edit Products
- Delete Products
- Update Product Price
- Update Product Stock
- Add Product Description and Images
- User Management
- View Registered Users
- Block and Unblock Users
- Order Management
- View Customer Orders
- Update Order Status
- Sales Statistics

### Order Status
- Pending
- Processing
- Shipped
- Delivered
- Cancelled

## 🛠️ Technologies Used

Frontend:
- React.js
- Vite
- Tailwind CSS
- React Router
- Axios
- React Icons
- Context API

Backend:
- Node.js
- Express.js
- Mongoose
- JWT
- bcryptjs
- CORS
- dotenv

Database:
- MongoDB Atlas

Deployment:
- Vercel - Frontend
- Railway - Backend
- MongoDB Atlas - Database

Development Tools:
- Visual Studio Code
- Git
- GitHub
- npm
- Postman

## 🏗️ System Architecture

    Customer Browser
           |
           v
    React Frontend
        (Vercel)
           |
        REST API
           |
           v
    Node.js + Express
        (Railway)
           |
           v
      MongoDB Atlas

## 📂 Project Structure

    ecommerce-web/
    |
    ├── public/
    |
    ├── src/
    │   ├── components/
    │   ├── context/
    │   │   ├── AuthContext.jsx
    │   │   └── CartContext.jsx
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── Products.jsx
    │   │   ├── ProductDetails.jsx
    │   │   ├── Cart.jsx
    │   │   ├── Checkout.jsx
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │   ├── OrderSuccess.jsx
    │   │   ├── NotFound.jsx
    │   │   ├── AdminDashboard.jsx
    │   │   ├── AdminProducts.jsx
    │   │   ├── AdminOrders.jsx
    │   │   └── AdminUsers.jsx
    │   ├── services/
    │   │   └── api.js
    │   ├── App.jsx
    │   └── main.jsx
    |
    ├── server/
    │   ├── config/
    │   │   └── db.js
    │   ├── middleware/
    │   │   └── authMiddleware.js
    │   ├── models/
    │   │   ├── User.js
    │   │   ├── Product.js
    │   │   └── Order.js
    │   ├── routes/
    │   │   ├── authRoutes.js
    │   │   ├── productRoutes.js
    │   │   ├── userRoutes.js
    │   │   ├── orderRoutes.js
    │   │   └── dashboardRoutes.js
    │   ├── server.js
    │   ├── package.json
    │   └── .env
    |
    ├── .env
    ├── .gitignore
    ├── package.json
    ├── package-lock.json
    └── README.md

## 🔐 Authentication

ShopEase uses JWT-based authentication and bcrypt password hashing.

Authentication flow:

    User Login
         |
         v
    Validate Credentials
         |
         v
    Verify Password
         |
         v
    Generate JWT Token
         |
         v
    Store Authentication Information
         |
         v
    Protected API Requests

Admin-only API routes additionally verify that the authenticated user's role is admin.

Protected requests use:

    Authorization: Bearer <token>

## 🗄️ Database

ShopEase uses MongoDB Atlas as the cloud database.

Main collections:

- Users
- Products
- Orders

User fields:

    firstName
    lastName
    email
    password
    role
    isBlocked
    createdAt
    updatedAt

Product fields:

    name
    price
    category
    description
    image
    stock
    createdAt
    updatedAt

Order fields:

    user
    items
    customer
    paymentMethod
    total
    status
    createdAt
    updatedAt

## 🔌 REST API

Base URL:

https://ecommerce-web-production-a568.up.railway.app/api

Authentication:

    POST /auth/register
    POST /auth/login

Products:

    GET    /products
    GET    /products/:id
    POST   /products
    PUT    /products/:id
    DELETE /products/:id

Users:

    GET /users
    PUT /users/:id/block

Orders:

    POST /orders
    GET  /orders/my-orders
    GET  /orders
    PUT  /orders/:id/status

Dashboard:

    GET /dashboard

Admin authentication is required for protected admin endpoints.

## ⚙️ Environment Variables

Frontend `.env`:

    VITE_API_URL=http://localhost:5000/api

Backend `server/.env`:

    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    PORT=5000

Never upload `.env` files or database credentials to GitHub.

## 💻 Local Setup

### 1. Clone the Repository

    git clone https://github.com/pathumnimsara/ecommerce-web.git

### 2. Enter the Project

    cd ecommerce-web

### 3. Install Frontend Dependencies

    npm install

### 4. Install Backend Dependencies

    cd server
    npm install

### 5. Configure Backend Environment

Create:

    server/.env

Add:

    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    PORT=5000

### 6. Start Backend

Inside the server folder:

    npm start

For development mode:

    npm run dev

Backend:

    http://localhost:5000

### 7. Start Frontend

Open another terminal and return to the project root:

    cd ecommerce-web

Run:

    npm run dev

Frontend:

    http://localhost:5173

## 🚀 Deployment

Frontend:

    Vercel
    https://ecommerce-web-delta-fawn.vercel.app

Backend:

    Railway
    https://ecommerce-web-production-a568.up.railway.app

Database:

    MongoDB Atlas

Source Code:

    GitHub
    https://github.com/pathumnimsara/ecommerce-web

## 🔒 Security

- JWT authentication
- bcrypt password hashing
- Protected API routes
- Admin authorization
- Environment variables
- CORS
- MongoDB Atlas
- Passwords excluded from user API responses
- Sensitive credentials excluded from GitHub

## 🧪 Main Customer Workflow

    Register
       |
       v
    Login
       |
       v
    Browse Products
       |
       v
    Add to Cart
       |
       v
    Checkout
       |
       v
    Enter Customer Details
       |
       v
    Select Payment Method
       |
       v
    Place Order
       |
       v
    Order Confirmation

## 👨‍💼 Main Admin Workflow

    Admin Login
         |
         v
    Dashboard
         |
         v
    View Statistics
         |
         v
    Manage Products
         |
         v
    Manage Users
         |
         v
    Manage Orders
         |
         v
    Update Order Status

## 🧪 Testing Checklist

- Frontend loads successfully
- Products load from MongoDB
- User registration works
- User login works
- Admin login works
- Products can be added
- Products can be edited
- Products can be deleted
- Products can be added to cart
- Checkout works
- Orders are saved to MongoDB
- Admin can view orders
- Admin can update order status
- Dashboard statistics work
- User management works
- Users can be blocked and unblocked

## 🔮 Future Improvements

- Online Payment Gateway
- Product Search
- Product Filtering
- Product Reviews and Ratings
- Wishlist
- Email Notifications
- Advanced Analytics
- Order Tracking
- Cloud Image Storage
- Pagination
- Improved Admin Dashboard

## 👨‍💻 Developer

Pathum Nimesh Nimsara

GitHub:
https://github.com/pathumnimsara

## ⭐ ShopEase

Full Stack E-Commerce Web Application

Built with:

React.js • Node.js • Express.js • MongoDB

Frontend: Vercel  
Backend: Railway  
Database: MongoDB Atlas  
Source Code: GitHub
