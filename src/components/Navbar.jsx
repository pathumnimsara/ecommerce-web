
import { Link } from "react-router-dom";
import { FiShoppingCart, FiUser, FiSearch } from "react-icons/fi";

function Navbar() {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gray-900">
            ShopEase
          </Link>

          {/* Navigation Links */}
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

          {/* Search + Icons */}
          <div className="flex items-center gap-5">

            <button className="text-gray-700 hover:text-gray-900">
              <FiSearch size={20} />
            </button>

            <Link
              to="/cart"
              className="text-gray-700 hover:text-gray-900"
            >
              <FiShoppingCart size={20} />
            </Link>

            <Link
              to="/login"
              className="text-gray-700 hover:text-gray-900"
            >
              <FiUser size={20} />
            </Link>

          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
