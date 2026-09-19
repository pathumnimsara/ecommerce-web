import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const [error, setError] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = cartItems.length > 0 ? 5 : 0;
  const total = subtotal + shipping;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const hasEmptyField = Object.values(formData).some(
      (value) => value.trim() === ""
    );

    if (hasEmptyField) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");

    const paymentNames = {
      cod: "Cash on Delivery",
      card: "Credit / Debit Card",
      bank: "Bank Transfer",
    };

    navigate("/order-success");
  };

  if (cartItems.length === 0) {
    return (
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold">
            Your cart is empty
          </h1>

          <p className="text-gray-600 mt-3">
            Add some products before checking out.
          </p>

          <Link
            to="/products"
            className="inline-block mt-6 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700"
          >
            Browse Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-8">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <form
            id="checkout-form"
            onSubmit={handleSubmit}
            className="lg:col-span-2 border rounded-xl p-6"
          >
            <h2 className="text-xl font-bold mb-6">
              Customer Information
            </h2>

            {error && (
              <p className="mb-5 text-red-600 bg-red-50 p-3 rounded-lg">
                {error}
              </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-2">
                  First Name
                </label>

                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter first name"
                  className="w-full border rounded-lg px-4 py-3"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Last Name
                </label>

                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter last name"
                  className="w-full border rounded-lg px-4 py-3"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="w-full border rounded-lg px-4 py-3"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="w-full border rounded-lg px-4 py-3"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">
                  Address
                </label>

                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter delivery address"
                  className="w-full border rounded-lg px-4 py-3"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  City
                </label>

                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter city"
                  className="w-full border rounded-lg px-4 py-3"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Postal Code
                </label>

                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  placeholder="Enter postal code"
                  className="w-full border rounded-lg px-4 py-3"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="mt-8 border-t pt-6">
              <h2 className="text-xl font-bold mb-5">
                Payment Method
              </h2>

              <div className="space-y-3">
                <label className="flex items-center gap-3 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={(e) =>
                      setPaymentMethod(e.target.value)
                    }
                  />

                  <div>
                    <p className="font-medium">
                      Cash on Delivery
                    </p>

                    <p className="text-sm text-gray-500">
                      Pay when your order arrives
                    </p>
                  </div>
                </label>

                <label className="flex items-center gap-3 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={(e) =>
                      setPaymentMethod(e.target.value)
                    }
                  />

                  <div>
                    <p className="font-medium">
                      Credit / Debit Card
                    </p>

                    <p className="text-sm text-gray-500">
                      Pay securely using your card
                    </p>
                  </div>
                </label>

                <label className="flex items-center gap-3 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank"
                    checked={paymentMethod === "bank"}
                    onChange={(e) =>
                      setPaymentMethod(e.target.value)
                    }
                  />

                  <div>
                    <p className="font-medium">
                      Bank Transfer
                    </p>

                    <p className="text-sm text-gray-500">
                      Pay through a bank transfer
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </form>

          {/* Order Summary */}
          <div className="border rounded-xl p-6 h-fit">
            <h2 className="text-xl font-bold mb-6">
              Order Summary
            </h2>

            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
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

            <div className="border-t mt-6 pt-4 space-y-3">
              <div className="flex justify-between">
                <span>Subtotal</span>

                <span>
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>

                <span>
                  ${shipping.toFixed(2)}
                </span>
              </div>

              <div className="border-t pt-4 flex justify-between text-lg font-bold">
                <span>Total</span>

                <span>
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            <button
              type="submit"
              form="checkout-form"
              className="w-full mt-6 bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-700"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Checkout;