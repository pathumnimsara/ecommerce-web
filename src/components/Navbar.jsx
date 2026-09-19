import { FiShoppingCart, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <h1 className="text-2xl font-bold">
          ShopEase
        </h1>

        <div className="flex items-center gap-6">
          <a href="/" className="hover:text-gray-300">
            Home
          </a>

          <a href="/products" className="hover:text-gray-300">
            Products
          </a>

          <a
            href="/cart"
            className="flex items-center gap-1 hover:text-gray-300"
          >
            <FiShoppingCart />
            Cart
          </a>

          <a
            href="/login"
            className="flex items-center gap-1 hover:text-gray-300"
          >
            <FiUser />
            Login
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;