import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <main className="min-h-[calc(100vh-80px)] bg-gray-50 flex items-center justify-center py-12">
      <div className="max-w-lg w-full mx-auto px-6 text-center">
        <div className="bg-white border rounded-2xl p-8 shadow-sm">
          <div className="text-6xl mb-6">
            ✅
          </div>

          <h1 className="text-3xl font-bold">
            Order Placed Successfully!
          </h1>

          <p className="text-gray-600 mt-4">
            Thank you for your purchase. Your order has been
            successfully placed.
          </p>

          <p className="text-sm text-gray-500 mt-3">
            We will process your order and contact you with
            further details.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Link
              to="/products"
              className="flex-1 bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-700"
            >
              Continue Shopping
            </Link>

            <Link
              to="/"
              className="flex-1 border border-gray-900 py-3 rounded-lg hover:bg-gray-100"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default OrderSuccess;