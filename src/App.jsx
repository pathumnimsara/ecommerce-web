
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Checkout from "./pages/Checkout";
import Register from "./pages/Register";
import OrderSuccess from "./pages/OrderSuccess";
import NotFound from "./pages/NotFound";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminUsers from "./pages/admin/AdminUsers";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <AuthProvider>
    <CartProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="*" element={<NotFound />} />
         <Route
  path="/admin"
  element={
    <ProtectedRoute adminOnly>
      <AdminDashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/products"
  element={
    <ProtectedRoute adminOnly>
      <AdminProducts />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/orders"
  element={
    <ProtectedRoute adminOnly>
      <AdminOrders />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/users"
  element={
    <ProtectedRoute adminOnly>
      <AdminUsers />
    </ProtectedRoute>
  }
/>


        </Routes>
      </BrowserRouter>
    </CartProvider>
    </AuthProvider>
  );
}

export default App;
