import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
  FaSearch,
} from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-gray-900"
          >
            ShopEase
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-black transition"
            >
              Home
            </Link>

            <Link
              to="/products"
              className="text-gray-700 hover:text-black transition"
            >
              Products
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-5">

            {/* Search */}
            <button
              className="text-gray-700 hover:text-black transition"
              aria-label="Search"
            >
              <FaSearch />
            </button>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-black transition"
            >
              <FaShoppingCart className="text-lg" />

              {cartCount > 0 && (
                <span className="absolute -top-3 -right-3 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Login / Logout */}
            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">
                  Hi, {user.firstName}
                </span>

                <button
                  onClick={logout}
                  className="flex items-center gap-2 text-gray-700 hover:text-black transition"
                >
                  <FaUser />
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-2 text-gray-700 hover:text-black transition"
              >
                <FaUser />
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 text-xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t py-4 space-y-4">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 hover:text-black"
            >
              Home
            </Link>

            <Link
              to="/products"
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 hover:text-black"
            >
              Products
            </Link>

            <Link
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-gray-700 hover:text-black"
            >
              <FaShoppingCart />
              Cart ({cartCount})
            </Link>

            {user ? (
              <div className="flex items-center justify-between">
                <span className="text-gray-600">
                  Hi, {user.firstName}
                </span>

                <button
                  onClick={() => {
                    logout();
                    setMenuOpen(false);
                  }}
                  className="flex items-center gap-2 text-gray-700 hover:text-black"
                >
                  <FaUser />
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 text-gray-700 hover:text-black"
              >
                <FaUser />
                Login
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;