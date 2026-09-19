import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiShoppingCart,
  FiUser,
  FiSearch,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cartItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4">

        {/* Main Navbar */}

        <div className="flex items-center justify-between">

          {/* Logo */}

          <Link
            to="/"
            className="text-2xl font-bold text-gray-900"
            onClick={() => setMenuOpen(false)}
          >
            ShopEase
          </Link>

          {/* Desktop Navigation */}

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-gray-900"
            >
              Home
            </Link>

            <Link
              to="/products"
              className="text-gray-700 hover:text-gray-900"
            >
              Products
            </Link>
          </div>

          {/* Right Side Icons */}

          <div className="flex items-center gap-5">

            <button className="text-gray-700 hover:text-gray-900">
              <FiSearch size={20} />
            </button>

            {/* Cart */}

            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-gray-900"
            >
              <FiShoppingCart size={21} />

              {cartCount > 0 && (
                <span className="absolute -top-3 -right-3 bg-gray-900 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* User */}

            <Link
              to="/login"
              className="hidden md:block text-gray-700 hover:text-gray-900"
            >
              <FiUser size={20} />
            </Link>

            {/* Mobile Menu Button */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-gray-700"
            >
              {menuOpen ? (
                <FiX size={24} />
              ) : (
                <FiMenu size={24} />
              )}
            </button>

          </div>
        </div>

        {/* Mobile Menu */}

        {menuOpen && (
          <div className="md:hidden mt-4 border-t pt-4 space-y-3">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 hover:text-gray-900 py-2"
            >
              Home
            </Link>

            <Link
              to="/products"
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 hover:text-gray-900 py-2"
            >
              Products
            </Link>

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 py-2"
            >
              <FiUser size={18} />
              Login
            </Link>

          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;