import { Link } from "react-router-dom";
import { FiShoppingCart, FiUser, FiSearch } from "react-icons/fi";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cartItems } = useCart();

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          <Link
            to="/"
            className="text-2xl font-bold text-gray-900"
          >
            ShopEase
          </Link>

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