import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import api from "../services/api";

function Checkout() {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    address: "",
    city: "",
    phone: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getProductId = (product) => {
    return product._id || product.id;
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!user) {
      navigate("/login");
      return;
    }

    if (cartItems.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    try {
      setLoading(true);

      const orderItems = cartItems.map((item) => ({
        product: getProductId(item),
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image || "",
      }));

      await api.post(
        "/orders",
        {
          items: orderItems,
          customer: formData,
          paymentMethod,
          total,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      navigate("/order-success");
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Failed to place order. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4">

        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Checkout
        </h1>

        {error && (
          <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >

          {/* Customer Details */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">

            <h2 className="text-xl font-semibold mb-5">
              Delivery Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="border rounded-lg px-4 py-3"
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="border rounded-lg px-4 py-3"
              />

            </div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-3 mt-4"
            />

            <input
              type="text"
              name="address"
              placeholder="Delivery address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-3 mt-4"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">

              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
                className="border rounded-lg px-4 py-3"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="border rounded-lg px-4 py-3"
              />

            </div>

            {/* Payment */}
            <h2 className="text-xl font-semibold mt-8 mb-5">
              Payment Method
            </h2>

            <div className="space-y-3">

              <label className="flex items-center gap-3 border rounded-lg p-4 cursor-pointer">
                <input
                  type="radio"
                  value="COD"
                  checked={paymentMethod === "COD"}
                  onChange={(e) =>
                    setPaymentMethod(e.target.value)
                  }
                />
                <span>Cash on Delivery</span>
              </label>

              <label className="flex items-center gap-3 border rounded-lg p-4 cursor-pointer">
                <input
                  type="radio"
                  value="Card"
                  checked={paymentMethod === "Card"}
                  onChange={(e) =>
                    setPaymentMethod(e.target.value)
                  }
                />
                <span>Card Payment</span>
              </label>

              <label className="flex items-center gap-3 border rounded-lg p-4 cursor-pointer">
                <input
                  type="radio"
                  value="Bank Transfer"
                  checked={paymentMethod === "Bank Transfer"}
                  onChange={(e) =>
                    setPaymentMethod(e.target.value)
                  }
                />
                <span>Bank Transfer</span>
              </label>

            </div>

          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-xl shadow-sm p-6 h-fit">

            <h2 className="text-xl font-semibold mb-5">
              Order Summary
            </h2>

            <div className="space-y-4">

              {cartItems.map((item) => (
                <div
                  key={getProductId(item)}
                  className="flex justify-between gap-4"
                >
                  <div>
                    <p className="font-medium">
                      {item.name}
                    </p>

                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <p className="font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}

            </div>

            <div className="border-t mt-6 pt-4 flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-3 rounded-lg mt-6 hover:bg-gray-800 disabled:bg-gray-400"
            >
              {loading ? "Placing Order..." : "Place Order"}
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}

export default Checkout;